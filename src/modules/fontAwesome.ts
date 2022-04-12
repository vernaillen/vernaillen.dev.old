import type { UserModule } from '~/types'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarDays, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCalendarDays, faLocationPin, faInstagram, faLinkedin);

export const install: UserModule = ({ app }) => {
    app.component('font-awesome-icon', FontAwesomeIcon);
}