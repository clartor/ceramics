<template>
  <div>
    <h1>Products</h1>
    <div class="products">
      <div v-for="(product, index) in products" :key="index">
        <h3>{{product.name}}
        <div class="cost">{{product.cost}}</div></h3>
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
          cost: "590 kr",
          //image: "../public/keramikBilder/kannaEn.jpg"
          image: "/ceramics/src/views/VaruSpecar/LillOra.vue"
        },
        {
          name: "Mortla",
          cost: "529 kr",
          //image: "https://via.placeholder.com/150"
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