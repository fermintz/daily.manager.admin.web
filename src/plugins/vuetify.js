import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import '../assets/css/global.scss';
import '../assets/css/global-font.scss';
import vueMoment from 'vue-moment'

Vue.use(Vuetify);
Vue.use(vueMoment);
Vue.config.productionTip = false

export default new Vuetify({});
