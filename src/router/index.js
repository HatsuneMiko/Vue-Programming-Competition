import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/login/login'
import Home from '@/pages/home/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//访问之前，都检查下是否登录了
// router.beforeEach((to, from, next)=>{
//   if(to.path.startsWith('/login')){
//     window.localStorage.removeItem('access-token')
//     next()
//   }else{
//     let token = window.localStorage.getItem('access-token')
//     if(!token){
//       next({path:'/login'})
//     }else{
//       next()
//     }
//   }
// })


export default router
