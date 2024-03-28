import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        redirect: { name: 'first' },
        children: [
          {
            path: 'first',
            name: 'first',
            component: () => import('src/components/FirstRoute.vue'),
          },
          {
            path: 'second',
            name: 'second',
            component: () => import('src/components/SecondRoute.vue'),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
