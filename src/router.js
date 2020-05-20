import Vue from 'vue'
import Router from 'vue-router'

import home from './views/home.vue'
import foo from './views/foo.vue'
import bar from './views/bar.vue'
import about from './views/about.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/foo', name: 'foo', component: foo },
    { path: '/bar', name: 'bar', component: bar },
    { path: '/about', name: 'about', component: about }
  ]
})

export default router;
