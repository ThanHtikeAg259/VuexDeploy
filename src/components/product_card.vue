<template>
  <div class="col-3 mt-3">
    <div class="card h-100 text-left">
      <img :src="product.image" alt="" class="w-100">
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="{name: 'product', params: {id: product.id}}">{{ product.title }}</router-link>
        </h4>
        <strong>${{ product.price }}</strong>
        <p class="card-text">{{ product.description }}</p>
      </div>
      <div class="px-4 pb-3">
        <button class="btn btn-primary" @click="AddToCart()">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["product"],

    methods: {
      AddToCart(){
        this.$store.dispatch('AddProductToCart', {
          product: this.product,
          quantity: 1
        })
      }
    }
  };
</script>

<style>
</style>