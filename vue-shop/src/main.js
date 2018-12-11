// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543981176753&di=18abf927201e9d1fdbbf5704bb3a87ee&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ff3d3572c11dfa9ec3be00dc468d0f703908fc113.jpg',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543981176753&di=18abf927201e9d1fdbbf5704bb3a87ee&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ff3d3572c11dfa9ec3be00dc468d0f703908fc113.jpg',
  attempt: 1
})

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload)

Vue.config.productionTip = false

/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
