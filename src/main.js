import Vue from 'vue'
import App from './App.vue'

import router from './router'

import mymenu from '@/components/my-menu.vue'
Vue.component('my-menu', mymenu)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
