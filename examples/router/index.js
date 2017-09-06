import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Docs from '@/pages/Docs'
import Des from '@/pages/Des'
import Phone from '@/pages/phone/index.vue'
import PhoneIndex from '@/pages/phone/index'
import Icon from '@/pages/phone/icon/index'

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
					name: 'icon',
					path: 'icon',
					component: Des
				},
				{
					path: '*',
					redirect: '/docs'
				}
			]
		},
		{
			path: '/phone',
			name: 'phone',
			component: Phone,
			children: [
				{
					name: 'icon',
					path: 'icon',
					component: Icon
				}
			]
		}
  ]
})
