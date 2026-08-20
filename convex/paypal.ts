"use node";
// Server-side PayPal Orders API integration.
// Client secret is accessed only here — never exposed to the browser.

import { action } from "./_generated/server";
import { v } from "convex/values";

const CLIENT_ID = "BAAq9wz-L1cOmxowQLyBTXr8i8x-rjnemjD-jCt2p2wad_EL5WCMzcUk4bAPgMPQhO1NmEoZJqab7zVsp0";
const PAYPAL_API_BASE = "https://api-m.paypal.com";

async function getAccessToken(): Promise<string> {
  const secret = process.env.PAYPAL_CLIENT_SECRET;
  if (!secret) throw new Error("PAYPAL_CLIENT_SECRET is not configured");

  const credentials = Buffer.from(`${CLIENT_ID}:${secret}`).toString("base64");
  const res = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PayPal auth failed: ${res.status} ${text}`);
  }

  const data = await res.json() as { access_token: string };
  return data.access_token;
}

export const createOrder = action({
  args: {
    amountNzd: v.string(),
    itemName: v.string(),
  },
  handler: async (_ctx, args): Promise<string> => {
    const token = await getAccessToken();

    const res = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [{
          amount: {
            currency_code: "NZD",
            value: args.amountNzd,
          },
          description: `Hawkez Haven – ${args.itemName}`,
        }],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`PayPal create order failed: ${res.status} ${text}`);
    }

    const data = await res.json() as { id: string };
    return data.id;
  },
});

export const captureOrder = action({
  args: {
    orderId: v.string(),
  },
  handler: async (_ctx, args): Promise<{ status: string }> => {
    const token = await getAccessToken();

    const res = await fetch(
      `${PAYPAL_API_BASE}/v2/checkout/orders/${args.orderId}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`PayPal capture failed: ${res.status} ${text}`);
    }

    const data = await res.json() as { status: string };
    return { status: data.status };
  },
});
