// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

import router from './router'

/* eslint-disable no-new */
Vue.use(Vuex)

const vuex_store = new Vuex.Store({
  state:{
    name:" "
  },
  mutations:{
    showUserName(state){
      alert(state.name)
    }
  }
})
new Vue({
  el: '#app',
  store: vuex_store,//注入到vue
  router,
  template: '<App/>',
  components: { App }
})
 
