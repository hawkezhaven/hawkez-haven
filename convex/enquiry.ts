"use node";

import escapeHtml from "escape-html";
import { Hercules } from "@usehercules/sdk";
import { v } from "convex/values";
import { action } from "./_generated/server";
import { ConvexError } from "convex/values";

const hercules = new Hercules({
  apiKey: process.env.HERCULES_API_KEY!,
  apiVersion: "2025-12-09",
});

export const sendEnquiry = action({
  args: {
    subject: v.string(),
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    message: v.optional(v.string()),
    extraFields: v.array(v.object({ label: v.string(), value: v.string() })),
  },
  handler: async (_ctx, args): Promise<{ id: string }> => {
    const extraHtml = args.extraFields
      .filter(f => f.value.trim() !== "")
      .map(f => `<tr><td style="padding:4px 12px 4px 0;color:#4a4a42;font-size:13px;vertical-align:top;white-space:nowrap"><strong>${escapeHtml(f.label)}</strong></td><td style="padding:4px 0;font-size:13px;color:#1a1a18">${escapeHtml(f.value)}</td></tr>`)
      .join("");

    const extraText = args.extraFields
      .filter(f => f.value.trim() !== "")
      .map(f => `${f.label}: ${f.value}`)
      .join("\n");

    const html = `
      <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#f5f0e8;padding:32px">
        <div style="background:#1a1a18;padding:24px 32px;border-radius:12px 12px 0 0">
          <p style="color:#b8922a;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;margin:0 0 8px">Hawkez Haven</p>
          <h1 style="color:#f5f0e8;font-size:22px;margin:0">${escapeHtml(args.subject)}</h1>
        </div>
        <div style="background:#ffffff;padding:28px 32px;border-radius:0 0 12px 12px;border:1px solid #ddd4be">
          <table style="border-collapse:collapse;width:100%;margin-bottom:16px">
            <tr><td style="padding:4px 12px 4px 0;color:#4a4a42;font-size:13px;vertical-align:top;white-space:nowrap"><strong>Name</strong></td><td style="padding:4px 0;font-size:13px;color:#1a1a18">${escapeHtml(args.name)}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#4a4a42;font-size:13px;vertical-align:top;white-space:nowrap"><strong>Email</strong></td><td style="padding:4px 0;font-size:13px;color:#1a1a18">${escapeHtml(args.email)}</td></tr>
            ${args.phone ? `<tr><td style="padding:4px 12px 4px 0;color:#4a4a42;font-size:13px;vertical-align:top;white-space:nowrap"><strong>Phone</strong></td><td style="padding:4px 0;font-size:13px;color:#1a1a18">${escapeHtml(args.phone)}</td></tr>` : ""}
            ${extraHtml}
          </table>
          ${args.message ? `<div style="border-top:1px solid #ddd4be;padding-top:16px;margin-top:8px"><p style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#4a4a42;margin:0 0 8px">Message</p><p style="font-size:14px;color:#1a1a18;line-height:1.6;margin:0;white-space:pre-wrap">${escapeHtml(args.message)}</p></div>` : ""}
        </div>
        <p style="font-size:11px;color:#4a4a42;text-align:center;margin-top:16px">Reply to this email to respond directly to ${escapeHtml(args.name)}.</p>
      </div>
    `;

    const text = [
      `${args.subject}`,
      ``,
      `Name: ${args.name}`,
      `Email: ${args.email}`,
      args.phone ? `Phone: ${args.phone}` : "",
      extraText,
      args.message ? `\nMessage:\n${args.message}` : "",
    ].filter(line => line !== "").join("\n");

    try {
      const result = await hercules.email.send({
        from: "Hawkez Haven <hawkezhaven@gmail.com>",
        to: "hawkezhaven@gmail.com",
        reply_to: args.email,
        subject: args.subject,
        html,
        text,
      });
      return { id: result.id };
    } catch (err) {
      throw new ConvexError({
        message: "We were unable to deliver your enquiry. Please try again or contact us directly.",
        code: "EXTERNAL_SERVICE_ERROR",
      });
    }
  },
});
