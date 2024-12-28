/**
The routing of this file will not show the layout.
It is an independent new page.
the contents of the file still need to log in to access
 */
import type { AppRouteModule } from '/@/router/types';

// test
// http:ip:port/main-out
export const mainOutRoutes: AppRouteModule[] = [
  {
    path: '/main-out',
    name: 'MainOut',
    component: () => import('/@/views/demo/main-out/index.vue'),
    meta: {
      title: 'MainOut',
      ignoreAuth: true,
    },
  },
  {
    path: '/website',
    name: 'Website',
    component: () => import('/@/views/website/index.vue'),
    redirect: '/website/home',
    meta: {
      title: '网站',
      ignoreAuth: true,
    },
    children: [
      {
        path: '/website/home',
        name: 'home',
        component: () => import('/@/views/website/home.vue'),
        meta: {
          title: '网站',
          ignoreAuth: true,
        },
      },
      {
        path: '/website/about',
        name: 'about',
        component: () => import('/@/views/website/about.vue'),
        meta: {
          title: '网站',
          ignoreAuth: true,
        },
      },
      {
        path: '/website/business',
        name: 'business',
        component: () => import('/@/views/website/business.vue'),
        meta: {
          title: '网站',
          ignoreAuth: true,
        },
      },
      {
        path: '/website/team',
        name: 'team',
        component: () => import('/@/views/website/team.vue'),
        meta: {
          title: '网站',
          ignoreAuth: true,
        },
      },
      {
        path: '/website/connect',
        name: 'connect',
        component: () => import('/@/views/website/connect.vue'),
        meta: {
          title: '网站',
          ignoreAuth: true,
        },
      },
    ],
  },
];

export const mainOutRouteNames = mainOutRoutes.map((item) => item.name);
