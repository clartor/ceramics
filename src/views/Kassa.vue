
<template>
  <div class="kassa">
    <h1>Products</h1>
    <div class="products">
      <div v-for="product in products" :key="product.name">
        {{ product.name }}
        <img :src="product.image" alt="PLACEHOLDER" />
        <div>{{ product.cost }}</div>
        <button v-on:click="addItemToCart(product)">Add to cart</button>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  name: "App",
  data: () => {
    return {
      cart: [],
      products: [
        {
          name: "Hair Brush",
          cost: "$0.99",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Death Star",
          cost: "$5.99",
          image: "https://via.placeholder.com/150",
        },
      ],
    };
  },
  methods: {
    addItemToCart(product) {
      console.log(product);

    }
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

</style>