<template>
  <div id="app">
    <img src="./assets/logo.png" @click="this.history.back()">
    <username></username>
    <usersubmit></usersubmit>
  </div>
</template>

<script>
import username from './components/username.vue'
import usersubmit from './components/usersubmit.vue'
export default {
  name: 'app',
  components:{
    username,
    usersubmit
  }
}
</script>

<style>

</style>
