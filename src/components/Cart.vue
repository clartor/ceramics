<template>
  <div>
    <link rel="stylesheet" href="../../public/style.css">
    <h1>Your Cart</h1>
    <div class="products">
      <div class="testtest" v-for="(product, index) in cart" :key="index">
        <img :src="product.image" /> <br>
        <h3>{{product.name}}
        <div>{{product.cost}}</div></h3>
        <button v-on:click="removeItemFromCart(product)">Remove from cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cart"],
  methods: {
    removeItemFromCart(product) {
      this.$emit("removeItemFromCart", product);
    }
  }
};
</script>

<style>
</style>