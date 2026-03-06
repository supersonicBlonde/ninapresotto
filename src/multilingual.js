export function initMultilingual() {
  const storageKey = "user-lang-selected";
  const hasSelectedLang = localStorage.getItem(storageKey);
  const currentPath = window.location.pathname;

  // 1. Détection initiale (exécutée une seule fois)
  if (!hasSelectedLang) {
    const browserLang = navigator.language.split("-")[0];
    const isFrenchBrowser = browserLang === "fr";

    // Marquer comme détecté pour éviter les boucles au prochain chargement
    localStorage.setItem(storageKey, isFrenchBrowser ? "fr" : "en");

    if (isFrenchBrowser && !currentPath.startsWith("/fr")) {
      window.location.href = "/fr/";
      return;
    }
  }

  const urlMapping = {
    "/": "home",
    "/how-can-i-help/": "about",
    "/white-label-web-outsourcing/": "whiteLabel",
    "/i-am-your-technical-partner/": "technicalPartner",
    "/define-your-web-project/": "defineProject",
    "/work-process/": "workProcess",
    "/portfolio-web-developer/": "portfolio",
    "/testimonials/": "testimonials",
    "/faq-freelance-web-developer/": "faq",
    "/about-nina-presotto/": "aboutNina",
    "/contact/": "contact",
    "/privacy-policy/": "privacyPolicy",
    "/legal-notice/": "legal",
    "/fr/": "home",
    "/fr/services/": "about",
    "/fr/services/externaliser-en-marque-blanche/": "whiteLabel",
    "/fr/services/votre-partenaire-technique/": "technicalPartner",
    "/fr/services/demarrer-votre-projet/": "defineProject",
    "/fr/process/": "workProcess",
    "/fr/portfolio-developpeur-web/": "portfolio",
    "/fr/avis-clients/": "testimonials",
    "/fr/faq-developpeur-web-freelance/": "faq",
    "/fr/a-propos/": "aboutNina",
    "/fr/politique-de-confidentialite/": "privacyPolicy",
    "/fr/mentions-legales/": "legal",
    "/fr/contact/": "contact",
  };

  const reverseMapping = { en: {}, fr: {} };
  Object.entries(urlMapping).forEach(([url, pageId]) => {
    url.startsWith("/fr")
      ? (reverseMapping.fr[pageId] = url)
      : (reverseMapping.en[pageId] = url);
  });

  // 2. Gestionnaire de changement de langue
  const switchers = document.querySelectorAll(".lang-switcher");
  switchers.forEach((switcher) => {
    switcher.addEventListener("click", (e) => {
      e.preventDefault();

      const isCurrentlyFrench = currentPath.startsWith("/fr");
      const currentPageId = urlMapping[currentPath];
      const targetLang = isCurrentlyFrench ? "en" : "fr";

      // Mise à jour de la préférence utilisateur
      localStorage.setItem(storageKey, targetLang);

      let targetUrl = reverseMapping[targetLang][currentPageId];

      if (!targetUrl) {
        targetUrl = targetLang === "fr" ? "/fr/" : "/";
      }

      window.location.href = targetUrl;
    });
  });
}
