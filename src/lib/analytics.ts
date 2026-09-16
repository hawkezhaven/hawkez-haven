export type AnalyticsEvent =
  | "horse_profile_view"
  | "horse_sponsorship_click"
  | "adoption_enquiry_click"
  | "foster_enquiry_click"
  | "volunteer_enquiry_click"
  | "sponsorship_click"
  | "donation_click"
  | "contact_click"
  | "phone_click"
  | "email_click"
  | "facebook_click";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: AnalyticsEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", eventName, {
    ...params,
    event_source: "hawkez_haven_website",
  });
}
