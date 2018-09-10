import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store/store'
// import clickoutside from './directives/clickoutside'
import * as filters from './filters/index' //过滤器
import axios from './http'
import * as api from './api'
// var cloneDeep = require('lodash.clonedeep');

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

// Vue.directive('clickoutside', clickoutside);

Vue.prototype.$api = api; //所有接口列表挂载
Vue.prototype.$http = axios;
// Vue.prototype.$cloneDeep = cloneDeep;
Vue.prototype.$clearData = (data) => JSON.parse(JSON.stringify(data));

Vue.config.productionTip = false

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount('#app')