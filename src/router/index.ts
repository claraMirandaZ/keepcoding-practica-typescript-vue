import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    // Eager loading: carga todo al inicio
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // Route level code-splitting
    // This generates a separate chunk (about.[hash].js) for this route which is lazy-loaded when the route is visited
    // Lazy loading: no carga los archivos hasta que se visita este path
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue'),
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/DetailView.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory('/keepcoding-practica-typescript-vue/'),
  routes,
});

export default router;
