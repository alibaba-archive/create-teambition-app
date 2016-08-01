'use strict'
import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index'

Vue.use(Router)

const router = new Router({
  history: true,
  root: '/',
  saveScrollPosition: true
})

router.map({
  '/': {
    name: 'index',
    component: Index
  }
})

export default router
