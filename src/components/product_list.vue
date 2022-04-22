<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <product-card v-for="product in productsC" :key="product.id" :product = "product"/>
  </div>
</template>

<script>
import ProductCard from './product_card.vue'
  export default {
    components: {
      ProductCard,
    },

    computed: {
      productsC() {
        return this.$store.state.productsS;
      }
    },

    mounted() {
      this.$store.dispatch('GetAllProduct');
    }
  }
</script>

<style>

</style>