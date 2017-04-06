import Vue from 'vue'
import Vuex from 'vuex'
import username from '../components/username.vue'
import usersubmit from '../components/usersubmit.vue'
// import setWechatTitle from 'we-chat-title'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'username',
      component: username

    },
    {
      path: '/usersubmit',
      name: 'usersubmit',
      component: usersubmit
     
    }
  ]
})

 
