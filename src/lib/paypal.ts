// PayPal configuration for Hawkez Haven

// Public PayPal Client ID used by the live Orders/CAPTURE flow.
// VITE_PAYPAL_CLIENT_ID can override it in Vercel; the Client Secret remains server-side.
export const PAYPAL_CLIENT_ID =
  import.meta.env.VITE_PAYPAL_CLIENT_ID ||
  "BAAq9wz-L1cOmxowQLyBTXr8i8x-rjnemjD-jCt2p2wad_EL5WCMzcUk4bAPgMPQhO1NmEoZJqab7zVsp0";

export const PAYPAL_HOSTED_BUTTON_ID = "CWREMT7E255UN";
export const PAYPAL_EMAIL = "hawkez66@gmail.com";

// --- Sponsorship subscription plans ---
export const PAYPAL_SUBSCRIPTION_CLIENT_ID =
  "BAAq9wz-L1cOmxowQLyBTXr8i8x-rjnemjD-jCt2p2wad_EL5WCMzcUk4bAPgMPQhO1NmEoZJqab7zVsp0";

export const SUBSCRIPTION_PLAN_IDS: Record<string, string> = {
  "Chaff Sponsor":    "P-66W660330H5879158NJV2OAY",
  "Farrier Sponsor":  "P-3DA564685G920401RNJV2LJI",
  "Guardian Sponsor": "P-6DK30950XY6302345NJV2NOI",
};

// Build a PayPal standard payment URL with an optional preset amount in NZD.
export function paypalDonateUrl(amount?: number, itemName?: string): string {
  const params = new URLSearchParams({
    cmd: "_xclick",
    business: PAYPAL_EMAIL,
    currency_code: "NZD",
    item_name: itemName || "Support Hawkez Haven",
    no_shipping: "1",
    return: "https://hawkezhaven.org",
    ...(amount ? { amount: String(amount) } : {}),
  });
  return `https://www.paypal.com/cgi-bin/webscr?${params.toString()}`;
}

// PayPal SDK script URL
export const PAYPAL_SDK_URL = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&components=hosted-buttons&disable-funding=venmo&currency=NZD`;
