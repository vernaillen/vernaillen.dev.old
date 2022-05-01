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

export const install: UserModule = ({ app }) => {
  app.component("font-awesome-icon", FontAwesomeIcon);
};
