<template>
  <div>
    <div class="alert alert-primary alert-dismissible fade show" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      {{ noti }}
    </div>
  </div>
</template>

<script>
  export default {
    props: ["noti"]
  }
</script>

<style>

</style>