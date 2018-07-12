import Vue from 'vue';
import App from './Uploader/app.vue';
import router from '../router'

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
