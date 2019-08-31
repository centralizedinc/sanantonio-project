import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/ant-design-vue.js'


import axios from 'axios';
import * as VueGoogleMaps from 'vue2-google-maps'
import VueGeolocation from 'vue-browser-geolocation';

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VueGeolocation)
Vue.use(VueGoogleMaps, {
  load: {
    // key: 'AIzaSyCHB6d8PoTLPZ2dtnxSPSHFpeu3pxkiA6s' || process.env.VUE_APP_GOOGLE_MAP_KEY,
    key:  process.env.VUE_APP_GOOGLE_MAP_KEY
  },
  installComponents: true
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')