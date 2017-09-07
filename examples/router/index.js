import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Docs from '@/pages/Docs'
import Des from '@/pages/views/des/index.vue'
import Usage from '@/pages/views/usage/index.vue'


import Phone from '@/pages/phone/index.vue'
import PhoneIndex from '@/pages/phone/index'
import Icon from '@/pages/phone/icon/index.vue'
import IconMd from '@/pages/views/icon/index.vue'

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
					component: IconMd
				},
				{
					name: 'usage',
					path: 'usage',
					component: Usage
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
