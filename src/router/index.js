import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Dashboard from '@/components/Dashboard'
import Admin from '@/views/Admin'
// Children routes
import Profile from '@/components/Profile'
import Leave from '@/components/Leave'
import Complaints from '@/components/Complaints'

import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignUp,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path:'leave',
        name: 'Leave',
        component: Leave
      },
      {
        path: 'complaints',
        name: 'Complaints',
        component: Complaints
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: 'admin',
    name: 'Admin',
    component: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      next('/dashboard');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
