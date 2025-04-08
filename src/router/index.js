import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
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
  },
  {
    path: '/laboratory',
    name: 'laboratory',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/laboratory/Home.vue')
  },
  {
    path: '/laboratory/practicum',
    name: 'praktikum',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/laboratory/roadmap.vue')
  },
  {
    path: '/laboratory/structure',
    name: 'struktur',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/laboratory/struktur.vue')
  },
  {
    path: '/laboratory/practicum/register',
    name: 'pendaftaran',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/laboratory/PendaftaranPraktikum.vue')
  },
  {
    path: '/laboratory/practicum/registrant',
    name: 'daftarPeserta',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/laboratory/DaftarPeserta.vue')
  },
  {
    path: '/laboratory/practicum/module',
    name: 'modulPraktikum',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/laboratory/ModulPraktikum.vue')
  },
  {
    path: '/laboratory/practicum/purchase',
    name: 'pembelianModul',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/laboratory/pembelianModul.vue')
  },
  {
    path: '/laboratory/practicum/timetable',
    name: 'jadwalPraktikum',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/laboratory/jadwalPraktikum.vue')
  },
  {
    path: '/laboratory/practicum/evaluation',
    name: 'pageEvaluasi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/laboratory/pageEvaluasi.vue')
  },
  {
    path: '/laboratory/practicum/evaluation/register',
    name: 'sesiEvaluasi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/laboratory/sesiEvaluasi.vue')
  },
  {
    path: '/laboratory/practicum/evaluation/list',
    name: 'daftarSesiEval',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/laboratory/daftarSesiEval.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: Home,
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL), //process.env.BASE_URL
  routes
})

export default router