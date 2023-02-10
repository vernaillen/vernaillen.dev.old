import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faBackwardStep,
  faCalendarDays,
  faComments,
  faLocationPin,
  faPause,
  faPenToSquare,
  faPlay,
  faRss,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMastodon,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { UserModule } from './userModule'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css'
library.add(
  faBackwardStep,
  faCalendarDays,
  faComments,
  faLocationPin,
  faPause,
  faPenToSquare,
  faPlay,
  faRss,
  faSpinner,
  faInstagram,
  faLinkedin,
  faGithub,
  faTwitter,
  faMastodon,
)
// Prevent fontawesome from adding its CSS since we did it manually above:
config.autoAddCss = false

export const install: UserModule = ({ app }) => {
  app.component('FontAwesomeIcon', FontAwesomeIcon)
}
