import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, type Plugin } from "vite";

function replaceLegacyHerculesAssets(): Plugin {
  const replacements: Record<string, string> = {
    "https://hercules-cdn.com/file_lrJQml96WQlUGWerpWilHhr5": "/images/hero-horse.jpg",
  };

  return {
    name: "replace-legacy-hercules-assets",
    transform(code, id) {
      if (!id.includes("/src/") || !id.endsWith(".tsx")) return null;
      let next = code;
      for (const [legacy, local] of Object.entries(replacements)) {
        next = next.split(legacy).join(local);
      }
      return next === code ? null : { code: next, map: null };
    },
  };
}

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: true,
    hmr: { overlay: false },
  },
  plugins: [react(), tailwindcss(), replaceLegacyHerculesAssets()],
  resolve: {
    alias: {
      "@/convex": path.resolve(__dirname, "./convex"),
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
    ],
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
