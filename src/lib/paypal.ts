// PayPal configuration for Hawkez Haven

// Public PayPal Client ID used by the existing working Orders/CAPTURE flow.
// VITE_PAYPAL_CLIENT_ID can override it in Vercel; the Client Secret remains server-side.
export const PAYPAL_CLIENT_ID =
  import.meta.env.VITE_PAYPAL_CLIENT_ID ||
  "AfKaKhtMrDF33E63Jdc2Ow1QjwQG2lGQCjx95OF5ccHYIqhNveA0g5PFWvtVuYBAG68VEl7EtXHtctvC";

export const PAYPAL_HOSTED_BUTTON_ID = "CWREMT7E255UN";
export const PAYPAL_EMAIL = "hawkez66@gmail.com";

// --- Sponsorship subscription plans ---
export const PAYPAL_SUBSCRIPTION_CLIENT_ID = "AfKaKhtMrDF33E63Jdc2Ow1QjwQG2lGQCjx95OF5ccHYIqhNveA0g5PFWvtVuYBAG68VEl7EtXHtctvC";

export const SUBSCRIPTION_PLAN_IDS: Record<string, string> = {
  "Chaff Sponsor":    "P-66W660330H5879158NJV2OAY",
  "Farrier Sponsor":  "P-3DA564685G920401RNJV2LJI",
  "Guardian Sponsor": "P-6DK30950XY6302345NJV2NOI",
};

// Build a PayPal donate URL with a preset amount in NZD
export function paypalDonateUrl(amount?: number, itemName?: string): string {
  const params = new URLSearchParams({
    business: PAYPAL_EMAIL,
    currency_code: "NZD",
    cmd: "_donations",
    ...(amount ? { amount: String(amount) } : {}),
    ...(itemName ? { item_name: itemName } : { item_name: "Hawkez Haven Donation" }),
    return: "https://hawkezhaven.org",
  });
  return `https://www.paypal.com/donate?${params.toString()}`;
}

// PayPal SDK script URL
export const PAYPAL_SDK_URL = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&components=hosted-buttons&disable-funding=venmo&currency=NZD`;
