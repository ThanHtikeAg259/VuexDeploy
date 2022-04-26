<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <product-card v-for="product in productsC" :key="product.id" :product = "product"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ProductCard from './product_card.vue'
  export default {
    components: {
      ProductCard,
    },

    computed: {
      ...mapState({
        productsC: (state) => state.product.productsS
      })
    },

    methods: {
      ...mapActions({
        getData: 'GetAllProduct'
      })
    },

    async mounted() {
      
      this.getData()
      console.log(1);
      await setTimeout(() => {
        console.log(2);
      }, 3000);      
      console.log(3);
      
      // this.$store.dispatch('GetAllProduct');
      // console.log("product:" , this.productsC);
    },
  }
</script>

<style>

</style>