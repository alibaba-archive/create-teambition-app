'use strict'
import Vue from 'vue'
import Router from 'vue-router'

import Index from './components/index'

Vue.use(Router)

const routes = [
  { path: '/', name: 'index', component: Index }
]

export default new Router({
  mode: 'history',
  routes: routes
})
