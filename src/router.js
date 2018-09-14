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
        requireAuth: true,
        seo: {
          title: '安基利尔'
        }
      }
    }, {
      path: '/about',
      name: 'about',
      component: resolve => require(['@/views/about/index.vue'], resolve),
      meta: {
        requireAuth: true,
        seo: {
          title: '关于我们-安基利尔'
        }
      }
    }, {
      path: '/news',
      name: 'news',
      component: resolve => require(['@/views/news/index.vue'], resolve),
      meta: {
        requireAuth: true,
        seo: {
          title: '新闻中心-安基利尔'
        }
      }
    }, {
      path: '/news/article/:id',
      name: 'article',
      component: resolve => require(['@/views/news/detail/index.vue'], resolve),
      meta: {
        requireAuth: true,
        seo: {
          title: ''
        }
      }
    }, {
      path: '/solution/B2B',
      name: 'B2B',
      component: resolve => require(['@/views/solution/B2B/index.vue'], resolve),
      meta: {
        requireAuth: true,
        seo: {
          title: '解决方案-B2B平台'
        }
      }
    }, {
      path: '/solution/B2C',
      name: 'B2C',
      component: resolve => require(['@/views/solution/B2C/index.vue'], resolve),
      meta: {
        requireAuth: true,
        seo: {
          title: '解决方案-B2C平台'
        }
      }
    }, {
      path: '/solution/sass',
      name: 'sass',
      component: resolve => require(['@/views/solution/sass/index.vue'], resolve),
      meta: {
        requireAuth: true,
        seo: {
          title: '解决方案-仓储管理(SASS)'
        }
      }
    }, {
      path: '/solution/E-government',
      name: 'E-government',
      component: resolve => require(['@/views/solution/Egovernment/index.vue'], resolve),
      meta: {
        requireAuth: true,
        seo: {
          title: '解决方案-电子政务平台'
        }
      }
    }, {
      path: '/solution/O2O',
      name: 'O2O',
      component: resolve => require(['@/views/solution/O2O/index.vue'], resolve),
      meta: {
        requireAuth: true,
        seo: {
          title: '解决方案-O2O平台'
        }
      }
    }, {
      path: '/solution/farm',
      name: 'farm',
      component: resolve => require(['@/views/solution/farm/index.vue'], resolve),
      meta: {
        requireAuth: true,
        seo: {
          title: '解决方案-欢乐农场平台'
        }
      }
    }, {
      path: '/solution/health',
      name: 'health',
      component: resolve => require(['@/views/solution/health/index.vue'], resolve),
      meta: {
        requireAuth: true,
        seo: {
          title: '解决方案-医院大健康平台'
        }
      }
    }, {
      path: '/solution/IoT',
      name: 'IoT',
      component: resolve => require(['@/views/solution/IoT/index.vue'], resolve),
      meta: {
        requireAuth: true,
        seo: {
          title: '解决方案-物联网平台'
        }
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
