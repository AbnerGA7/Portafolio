import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  site: "https://abnergonzales.dev",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
  },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: { es: "es-PE", en: "en-US" },
      },
    }),
  ],
});
