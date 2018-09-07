import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
      path: '/tools',
      name: 'tools',
      component: () => import(/* webpackChunkName: "tools" */ '@/views/Tools.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import(/* webpackChunkName: "my" */ '@/views/my/My.vue')
    },
    {
      path: '/my/suggest',
      name: 'suggest',
      component: () => import(/* webpackChunkName: "suggest" */ '@/views/my/Suggest.vue'),
      meta: {
        hideNavBar: true
      }
    },
    {
      path: '/my/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/my/About.vue'),
      meta: {
        hideNavBar: true
      }
    },
    {
      path: '/tool',
      component: () => import(/* webpackChunkName: "toolbox" */ '@/views/ToolBox.vue'),
      /* 如果路由是 /tool，会命中 path: '/tool'，但是没有任何内容，这种情况下直接导向 404 page */
      redirect: { name: '404page' },
      meta: {
        hideNavBar: true,
        slideType: 'topToBottom'
      },
      children: [
        {
          path: 'base64',
          name: 'base64',
          component: () => import('@/tools/base64/base64.vue')
        }
      ]
    },
    {
      path: '/user',
      component: () => import('@/views/user/User.vue'),
      redirect: { name: '404page' },
      meta: {
        hideNavBar: true
      },
      children: [
        {
          path: 'login',
          name: '登陆',
          component: () => import('@/views/user/Login.vue')
        },
        {
          path: 'signin',
          name: '注册',
          component: () => import('@/views/user/Signin.vue')
        }
      ]
    },
    {
      path: '*',
      name: '404page',
      component: () => import(/* webpackChunkName: "page404" */ '@/views/Page404.vue'),
      meta: {
        hideNavBar: true,
        slideType: 'null'
      }
    }
  ]
})
