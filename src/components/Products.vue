<template>
  <div>
    <h1>Products</h1>
    <div class="products">
      <div v-for="(product, index) in products" :key="index">
        <h3>{{product.name}}</h3>
        <div class="cost">{{product.cost}}</div>
        <img :src="product.image" />
        <button v-on:click="addItemToCart(product)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      products: [
        {
          name: "Kannan",
          cost: "$0.99",
          image: "../public/keramikBilder/kannaEn.jpg"
        },
        {
          name: "Mortla",
          cost: "$5.99",
          image: "https://via.placeholder.com/150"
        }
      ]
    };
  },
  methods: {
    addItemToCart(product) {
      this.$emit("addItemToCart", product);
    }
  }
};
</script>

<style>
</style>