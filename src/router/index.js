import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import forms2 from '@/components/forms2'
import modificadores from '@/components/modificadores'

Vue.use(Router)

export default new Router({
	mode: 'history',		
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/form',
    	name: 'form',
    	component: forms2
    },
    {
    	path: '/modis',
    	name: 'modis',
    	component: modificadores,

    }
  ]
})
