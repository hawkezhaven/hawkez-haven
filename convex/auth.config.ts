import { AuthConfig } from "convex/server";

// Authentication is not currently used by Hawkez Haven.
// Keep the Convex auth config valid without the retired Hercules/OIDC provider.
export default {
  providers: [],
} satisfies AuthConfig;
