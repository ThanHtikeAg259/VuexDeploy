<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-tem nav-link active">Home</router-link>
          <router-link to="/about" class="nav-item nav-link">About</router-link>
        </div>

        <div>
          <div class="dropdown open">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">{{ cartCount }} Cart</button>
            <div @click="$event.stopPropagation()">
              <mini-cart />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import MiniCart from "./mini_cart.vue";
  import {mapGetters} from "vuex";
  export default {
    components: {
      MiniCart
    },

    computed: {
      ...mapGetters({
        cartCount: "cartItemCount"
      })
    }
  };
</script>

<style>
</style>