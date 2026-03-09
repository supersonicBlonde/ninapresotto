import { defineConfig } from "vite";
import { beasties } from "vite-plugin-beasties";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import htmlInject from "vite-plugin-html-inject";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/",
  plugins: [
    tailwindcss(),
    htmlInject({
      cleanUrls: true,
    }),
    beasties({
      // Plugin options
      options: {
        // Beasties library options
        preload: "swap",
        pruneSource: false, // Enable pruning CSS files
        inlineThreshold: 4000, // Inline stylesheets smaller than 4kb
      },
      // Filter to apply beasties only to specific HTML files
      filter: (path) => path.endsWith(".html"),
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        // English pages
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about-nina-presotto/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        help: resolve(__dirname, "how-can-i-help/index.html"),
        faq: resolve(__dirname, "faq-freelance-web-developer/index.html"),
        consulting: resolve(__dirname, "define-your-web-project/index.html"),
        services: resolve(__dirname, "i-am-your-technical-partner/index.html"),
        portfolio: resolve(__dirname, "portfolio-web-developer/index.html"),
        testimonials: resolve(__dirname, "testimonials/index.html"),
        process: resolve(__dirname, "work-process/index.html"),
        privacy: resolve(__dirname, "privacy-policy/index.html"),
        legal: resolve(__dirname, "legal-notice/index.html"),
        outsourcing: resolve(
          __dirname,
          "white-label-web-outsourcing/index.html",
        ),

        // French pages
        frMain: resolve(__dirname, "fr/index.html"),
        frHelp: resolve(__dirname, "fr/services/index.html"),
        frOutsourcing: resolve(
          __dirname,
          "fr/services/externaliser-en-marque-blanche/index.html",
        ),
        frServices: resolve(
          __dirname,
          "fr/services/votre-partenaire-technique/index.html",
        ),
        frConsulting: resolve(
          __dirname,
          "fr/services/demarrer-votre-projet/index.html",
        ),
        frProcess: resolve(__dirname, "fr/process/index.html"),
        frPortfolio: resolve(
          __dirname,
          "fr/portfolio-developpeur-web/index.html",
        ),
        frTestimonials: resolve(__dirname, "fr/avis-clients/index.html"),
        frContact: resolve(__dirname, "fr/contact/index.html"),
        frAbout: resolve(__dirname, "fr/a-propos/index.html"),
        frPrivacy: resolve(
          __dirname,
          "fr/politique-de-confidentialite/index.html",
        ),
        frLegal: resolve(__dirname, "fr/mentions-legales/index.html"),
        frFaq: resolve(
          __dirname,
          "fr/faq-developpeur-web-freelance//index.html",
        ),
      },
    },
  },
});
