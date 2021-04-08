<template>
  <div>
    <h1>Products</h1>
    <div class="products">
      <div v-for="(product, index) in products" :key="index">
        <h3>{{product.name}}
        <div class="cost">{{product.cost}}</div></h3>
        <img :src="product.image" /> <br>
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
          image: "/../../keramikBilder/kannaEn.jpg"
        },
        {
          name: "Mortla",
          cost: "529 kr",
          image: "/../../keramikBilder/mortel.jpg"
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