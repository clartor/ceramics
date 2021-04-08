<template>
  <div>
    <h1>Products</h1>
    <div class="products">
      <div v-for="(product, index) in products" :key="index">
        <h3>{{product.name}}
        <div class="cost">{{product.cost}}</div></h3>
        <router-link to="'/' + product.link"><img :src="product.image" /></router-link>  <br>
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
          name: "Slätis",
          cost: "130 kr",
          image: "../keramikBilder/kopparSläta.jpg",
          link: "/slatis"
        }
        ,
        {
          name: "Lugn",
          cost: "222 kr",
          image: "../keramikBilder/koppUtanÖra.jpg"
        },
        {
          name: "Kaffe",
          cost: "150 kr",
          image: "../keramikBilder/brunMugg.jpg"
        },
        {
          name: "Ribbis",
          cost: "130 kr",
          image: "../keramikBilder/kopparRibb.png",
        },
        {
          name: "LillOra",
          cost: "150 kr",
          image: "../keramikBilder/kopparSmåÖron.png",
        },
        {
          name: "Oljeflaska",
          cost: "475 kr",
          image: "../keramikBilder/olja.jpg",
        },
        {
          name: "Kannor",
          cost: "590 kr",
          image: "../keramikBilder/kannaEn.jpg",
        },
        {
          name: "Mortlar",
          cost: "529 kr",
          image: "../keramikBilder/mortel.jpg",
        },
        {
          name: "Krukor",
          cost: "650 kr",
          image: "../keramikBilder/kruka.jpg",
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