import Vue from "vue";
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import App from "./App.vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('firebase/firestore');


Vue.config.productionTip = false;
Vue.use(VueFirestore);
Vue.use(BootstrapVue);
Vue.use(require('vue-moment'));

new Vue({
  render: h => h(App)
}).$mount("#app");
