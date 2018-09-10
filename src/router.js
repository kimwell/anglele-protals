import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);


const router = new Router({
  mode: 'history',
  base: '/',
  routes: [{
    path: '/',
    name: 'main',
    redirect: '/index',
    component: resolve => require(['@/views/layout/indexTpm/index.vue'], resolve),
    children: [{
      path: '/index',
      name: 'index',
      component: resolve => require(['@/views/index/index.vue'], resolve),
      meta: {
        requireAuth: true
      }
    }, {
      path: '/about',
      name: 'about',
      component: resolve => require(['@/views/about/index.vue'], resolve),
      meta: {
        requireAuth: true
      }
    }, {
      path: '/news',
      name: 'news',
      component: resolve => require(['@/views/news/index.vue'], resolve),
      meta: {
        requireAuth: true
      }
    }, {
      path: '/news/article/:id',
      name: 'article',
      component: resolve => require(['@/views/news/detail/index.vue'], resolve),
      meta: {
        requireAuth: true
      }
    }, {
      path: '/solution/B2B',
      name: 'B2B',
      component: resolve => require(['@/views/solution/B2B/index.vue'], resolve),
      meta: {
        requireAuth: true
      }
    }, {
      path: '/solution/B2C',
      name: 'B2C',
      component: resolve => require(['@/views/solution/B2C/index.vue'], resolve),
      meta: {
        requireAuth: true
      }
    }, {
      path: '/solution/sass',
      name: 'sass',
      component: resolve => require(['@/views/solution/sass/index.vue'], resolve),
      meta: {
        requireAuth: true
      }
    }, {
      path: '/solution/E-government',
      name: 'E-government',
      component: resolve => require(['@/views/solution/Egovernment/index.vue'], resolve),
      meta: {
        requireAuth: true
      }
    }]
  }]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    next();
  } else {
    // if (store.state.authorization) {
    //     next();
    // } else {
    //     Modal.confirm({
    //         content: '您还没有登录，请登录',
    //         onOk() {
    //             next({
    //                 path: '/login',
    //                 query: { redirect: to.fullPath }
    //             })
    //         },
    //         onCancel() {
    //             router.replace({
    //                 path: '/'
    //             })
    //         }
    //     });
    // }
  }
});

router.afterEach((to, from) => {
  window.scrollTo(0, 0);
})

export default router;
