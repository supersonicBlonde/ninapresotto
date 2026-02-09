import { resolve } from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import htmlInject from "vite-plugin-html-inject";

export default defineConfig({
  base: "./",
  plugins: [
    tailwindcss(),
    htmlInject({
      cleanUrls: true,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        // La page racine (Anglais)
        main: resolve(__dirname, "index.html"),
        // La page dans le dossier fr (Français)
        fr: resolve(__dirname, "fr/index.html"),
      },
    },
  },
});
