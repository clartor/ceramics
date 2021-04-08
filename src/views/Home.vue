<template>
  <div>
    <header>
      <!-- <h1> I din varukorg: </h1> -->
      <button v-on:click="navigateTo('products')">View products</button>
      {{cart.length}} in cart
      <button v-on:click="navigateTo('cart')">View Cart</button>
    
    </header>
    
    <div v-if="page === 'cart'">
      <Cart v-on:removeItemFromCart="removeItemFromCart" :cart="cart" />
    </div>

    <div v-if="page === 'products'">
      <Products v-on:addItemToCart="addItemToCart" />
      </div>
  </div>
</template>


<script>
import Products from "../components/Products.vue";
import Cart from "../components/Cart.vue";
export default {
  
  name: "App",
  data: () => {
    return {
      page: "products",
      cart: []
    };
  },
  methods: {
    addItemToCart(product) {
      this.cart.push(product);
    },
    removeItemFromCart(product) {
      this.cart.splice(this.cart.indexOf(product), 1);
    },
    navigateTo(page) {
      this.page = page;
    }
  },
  components: { Products, Cart }
};
  
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 320px;
}

header {
  height: 60px;
//   width: 100%;
  background-color: rgb(196, 183, 183);
  box-shadow: 2px 2px 5px #999;
//   align-self: right;
  font-size: 22px;
  padding: 18px;
  top: 0;
  right: 0;
  position: fixed;
}
</style>