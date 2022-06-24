import type { UserModule } from "@/types";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBackwardStep,
  faCalendarDays,
  faLocationPin,
  faPause,
  faPlay,
  faRss,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faBackwardStep,
  faCalendarDays,
  faLocationPin,
  faPause,
  faPlay,
  faRss,
  faSpinner,
  faInstagram,
  faLinkedin,
  faGithub,
  faTwitter
);
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

export const install: UserModule = ({ app }) => {
  app.component("font-awesome-icon", FontAwesomeIcon);
};
