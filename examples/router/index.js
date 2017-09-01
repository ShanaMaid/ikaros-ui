import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Docs from '@/pages/Docs'
import Des from '@/pages/Des'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/docs',
      name: 'docs',
			component: Docs,
			redirect: '/docs/des',
			children: [
				{
					name: 'des',
					path: 'des',
					component: Des
				},
				{
					path: '*',
					redirect: '/docs'
				}
			]
    }
  ]
})
