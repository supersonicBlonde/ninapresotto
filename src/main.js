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
//import { NeatGradient } from "@firecms/neat";
import { initStickyHeader } from "./stickyHeader.js";
import { initGoToTop } from "./goToTop.js";
import { initActiveMenu } from "./activeMenu.js";
import { initMultilingual } from "./multilingual.js";

import { initTarteaucitron } from "./tarteaucitron.config.js";

//import { initSlider } from "./slider.js";

library.add(faArrowRight, faChevronUp, faCalendar, faEnvelope, faLinkedin);
dom.watch(); // remplace <i class="fa-user"> par du vrai <svg>

window.addEventListener("DOMContentLoaded", () => {
  initTarteaucitron();
  initMultilingual();
  initStickyHeader();
  initActiveMenu();
  initGoToTop();
});
