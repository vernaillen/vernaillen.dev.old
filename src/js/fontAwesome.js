
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  install(app, _options) {
    library.add(fas, far, fab);
    dom.watch();
    app.component("font-awesome-icon", FontAwesomeIcon);
  }
}