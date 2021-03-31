
<template>
  <div class="kassa">

  <link rel="stylesheet" href="../../style.css">
    <!-- <h1>Welcome, {{ name }}</h1> -->
    <p class="loginLink"><router-link to="/login">Medlem? Logga in här</router-link></p>
    <!-- <button class="logout" @click="Logout">Logout</button> -->
    <h1>I din varukorg:</h1>
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
import { ref, onBeforeMount } from 'vue';
import firebase from 'firebase';

export default {
  setup () {

    const name = ref("");

    onBeforeMount(() => {
       const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split('@')[0];
      }
    });

    const Logout = () => {
      firebase
          .auth()
          .signOut()
          .then(() => console.log("Signed out"))
          .catch(err => alert(err.message));
    }

    return {  
      name,
      Logout
    }
  }
}
</script>


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