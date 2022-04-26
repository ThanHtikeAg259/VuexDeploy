<template>
  <div class="dropdown-menu p-2" style="min-width:320px; right:0; left:auto" aria-labelledby="triggerId">
    <div v-for="item in cart" :key="item.product.id">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.product.title }}</strong>
          <br />
          {{ item.quantity }} x ${{ item.product.price }}
        </div>
        <div>
          <a href="#" class="badge badge-danger" @click="RemoveCart(item.product)">remove</a>
        </div>
      </div>
      <hr />
    </div>
    <div class="d-flex justify-content-between">
      <span>Total: {{ cartTotal }}</span>
      <a href="#" class="btn btn-danger" @click.prevent="RemoveAllCart()">Clear Cart</a>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex";

  export default {
    computed: {
      ...mapState({
        cart: state => state.cart.cart
      }),
      ...mapGetters('cart', ['cartTotal'])
    },

    methods: {
      ...mapActions("cart", ['RemoveCart', 'RemoveAllCart'])
      // Remove(product){
      //   this.$store.dispatch('RemoveCart', product)
      // },
      // RemoveAll(){
      //   this.$store.dispatch('RemoveAllCart')
      // }
    }
  }
</script>

<style>

</style>