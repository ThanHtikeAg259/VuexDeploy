<template>
  <div class="noti-list">
    <notification-msg v-for="noti in notis" :key="noti.id" :notification="noti"/>
  </div>
</template>

<script>
import NotificationMsg from './notification.vue'
import {mapState} from 'vuex';
export default {
  components: {
    NotificationMsg,
  },

  computed: {
    ...mapState(['notis'])
  },
};
</script>

<style>
.noti-list{
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  width: 320px;
}
</style>