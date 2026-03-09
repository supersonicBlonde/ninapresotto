export const initTarteaucitron = () => {
  if (typeof tarteaucitron === "undefined") {
    console.error("tarteaucitron n'est pas chargé !");
    return;
  }

  const lang = document.documentElement.lang.slice(0, 2) || "fr";
  tarteaucitron.init({
    privacyUrl:
      lang === "en" ? "/privacy-policy" : "/politique-confidentialite",
    bodyPosition:
      "top" /* top to bring it as first element for accessibility */,

    hashtag: "#tarteaucitron" /* Open the panel with this hashtag */,
    cookieName: "tarteaucitron" /* Cookie name */,

    orientation: "bottom" /* Banner position (top - bottom) */,

    groupServices: true /* Group services by category */,
    showDetailsOnClick: true /* Click to expand the description */,
    serviceDefaultState: "wait" /* Default state (true - wait - false) */,

    showAlertSmall: false /* Show the small banner on bottom right */,
    cookieslist: false /* Show the cookie list in a mini banner */,
    cookieslistEmbed: false /* Show the cookie list on the control panel */,

    closePopup: true /* Show a close X on the banner */,

    showIcon: true /* Show cookie icon to manage cookies */,
    //"iconSrc": "", /* Optionnal: URL or base64 encoded image */
    iconPosition:
      "BottomLeft" /* Position of the cookie (BottomRight - BottomLeft - TopRight - TopLeft) */,

    adblocker: false /* Show a Warning if an adblocker is detected */,

    DenyAllCta: true /* Show the deny all button */,
    AcceptAllCta: true /* Show the accept all button */,
    highPrivacy: true /* HIGHLY RECOMMANDED Disable auto consent */,
    alwaysNeedConsent: false /* Ask the consent for "Privacy by design" services */,

    handleBrowserDNTRequest: false /* If Do Not Track == 1, disallow all */,

    removeCredit: false /* Remove credit link */,
    moreInfoLink: true /* Show more info link */,

    useExternalCss: false /* Expert mode: do not load the tarteaucitron.css file */,
    useExternalJs: false /* Expert mode: do not load the tarteaucitron js files */,

    //"cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */

    readmoreLink: "" /* Change the default readmore link */,

    mandatory: true /* Show a message about mandatory cookies */,
    mandatoryCta: false /* Show the disabled accept button when mandatory on */,

    //"customCloserId": "", /* Optional a11y: Custom element ID used to open the panel */

    googleConsentMode: true /* Enable Google Consent Mode v2 for Google ads & GA4 */,
    bingConsentMode: true /* Enable Bing Consent Mode for Clarity & Bing Ads */,
    pianoConsentMode: true /* Enable Consent Mode for Piano Analytics */,
    pianoConsentModeEssential: false /* Load in Essential mode instead of opt-out by default */,
    softConsentMode: false /* Soft consent mode (consent is required to load the services) */,

    dataLayer: false /* Send an event to dataLayer with the services status */,
    serverSide: false /* Server side only, tags are not loaded client side */,

    partnersList: true /* Show the number of partners on the popup/middle banner */,
  });
  tarteaucitron.user.gtagUa = "G-HXQTMK8CPX";
  // tarteaucitron.user.gtagCrossdomain = ['example.com', 'example2.com'];
  tarteaucitron.user.gtagMore = function () {
    /* add here your optionnal gtag() */
  };
  (tarteaucitron.job = tarteaucitron.job || []).push("gtag");
};
