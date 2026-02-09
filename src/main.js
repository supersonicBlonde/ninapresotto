import "./style.css";
if (document.body.classList.contains("testimonial-page")) {
  import("./masonry.js");
}
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faChevronUp,
  faCalendar,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NeatGradient } from "@firecms/neat";
import { initStickyHeader } from "./stickyHeader.js";
import { initGoToTop } from "./goToTop.js";
import { initActiveMenu } from "./activeMenu.js";

import { initSlider } from "./slider.js";

// Define your config
export const config = {
  colors: [
    {
      color: "#0e776e",
      enabled: true,
    },
    {
      color: "#043b37",
      enabled: true,
    },
    {
      color: "#0e776e",
      enabled: false,
    },
    {
      color: "#0e776e",
      enabled: false,
    },
    {
      color: "#0e776e",
      enabled: false,
    },
  ],
  speed: 4,
  horizontalPressure: 4,
  verticalPressure: 5,
  waveFrequencyX: 0,
  waveFrequencyY: 0,
  waveAmplitude: 0,
  shadows: 2,
  highlights: 7,
  colorBrightness: 1,
  colorSaturation: 8,
  wireframe: false,
  colorBlending: 5,
  backgroundColor: "#043b37",
  backgroundAlpha: 1,
  grainScale: 0,
  grainSparsity: 0,
  grainIntensity: 0,
  grainSpeed: 0,
  resolution: 0.5,
};

library.add(faArrowRight, faChevronUp, faCalendar, faEnvelope, faLinkedin);
dom.watch(); // remplace <i class="fa-user"> par du vrai <svg>

window.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initActiveMenu();
  initGoToTop();
  // initSlider();
  const gradientElement = document.getElementById("gradient");
});
