<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view></router-view>
    </div>
    <notification-list />
  </div>
</template>

<script>
  import Header from "./components/header.vue"
  import NotificationList from './components/notification_list.vue'
  export default {
    name: 'App',
    components: {
      Header,
      NotificationList
    }
  }
</script>

<style>
</style>