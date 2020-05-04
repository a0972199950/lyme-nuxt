import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faTimes,
  faPaperPlane,
  faCamera,
  faPalette,
  faBars,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons'

import { 
  faQuestionCircle
} from '@fortawesome/free-regular-svg-icons'

library.add(
  faTimes,
  faPaperPlane,
  faCamera,
  faPalette,
  faBars,
  faQuestionCircle,
  faChevronLeft
)

Vue.component('font-awesome-icon', FontAwesomeIcon)