<template>
  <div class="row mt-5" v-if="productSingle">
    <div class="col-4">
      <img :src="productSingle.image" alt="" class="w-100">
    </div>
    <div class="col-8">
      <h1>{{ productSingle.title }}</h1>
      <h3>${{ productSingle.price }}</h3>
      <input type="number" class="text-center col-1 mr-2 p-1" v-model.number="quantity"
        onkeydown="return event.keyCode !== 69">
      <button class="btn btn-primary" @click="AddToCart()">Add to Cart</button>
      <p class="mt-4">{{ productSingle.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
  export default {
    data() {
      return {
        quantity: 1
      }
    },

    props: ['id'],

    computed: {
      // productSingle() {
      //   return this.$store.state.product;
      // }
      // ...mapState("product", ["product"])
      ...mapState({
        productSingle: state => state.product.product
      })
    },

    mounted() {
      this.$store.dispatch("GetSingleProduct", this.id);
    },

    methods: {
      // AddToCart() {
      //   this.$store.dispatch("AddProductToCart", {
      //     product: this.productSingle,
      //     quantity: this.quantity
      //   })
      // }
      ...mapActions("cart", ["AddProductToCart"]),
      AddToCart(){
        this.AddProductToCart({
          product: this.productSingle,
          quantity: this.quantity
        })
      }
    }
  }
</script>

<style>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>