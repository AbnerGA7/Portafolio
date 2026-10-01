import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

import react from "@astrojs/react";

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
  site: "https://portafolio-abnergonzales.netlify.app",
  vite: {
    assetsInclude: ["**/*.lottie"],
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
  integrations: [react()],
});
