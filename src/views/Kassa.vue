<!--
<template>
  <div class="kassa">
    <h1>I din varukorg:</h1>
  </div>
</template>
-->

<template>
  <div id="app">
    <nav class="nav">
      <h2 class="nav__header">Products</h2>
      <div class="nav__cart">
        <button>
          <i class="fas fa-shopping-cart"></i>
        </button>
        <span class="total-quantity">0</span>
        <div class="cart-dropdown">
          <ul class="cart-dropdown__list">
            <li>Product</li>
          </ul>
        </div>
      </div>
    </nav>

    <section class="products">
      <div class="product">
        <h3 class="product__header">Product 1</h3>
        <img
          src="https://via.placeholder.com/150"
          alt=""
          class="product__image"
        />
        <p class="product__description">Description</p>
        <div class="cart">
          <button class="cart__button">-</button>
          <span class="cart__quantity">0</span>
          <button class="cart__button">+</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  const app = new Vue({
    el: '#app',
    data() {
      return {
        products: [
        {
          id: 1,
          name: 'Product 1',
          description: 'This is an incredibly awesome product',
          quantity: 0,
        },
        {
          id: 2,
          name: 'Product 2',
          description: 'This is an incredibly awesome product',
          quantity: 0,
        },
        {
          id: 3,
          name: 'Product 3',
          description: 'This is an incredibly awesome product',
          quantity: 0,
        }
      ],
      showCart: false
      };
    }
  });
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  font-weight: normal;
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;
}

// https://sass-lang.com/documentation/style-rules/parent-selector
.nav {
  align-items: center;
  background: salmon;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  &__header {
    font-size: 2.5rem;
  }

  &__cart {
    position: relative;

    button {
      background: none;
      border: 0;
      color: white;
      cursor: pointer;
    }

    i {
      font-size: 2rem;
    }

    .total-quantity {
      align-items: center;
      background: lightblue;
      border-radius: 50%;
      display: flex;
      font-weight: bold;
      height: 2rem;
      justify-content: center;
      padding: 0.5rem;
      position: absolute;
      right: -10px;
      top: -10px;
      width: 2rem;
    }

    .cart-dropdown {
      background: white;
      border: 1px solid lightgray;
      border-radius: 10px;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
      color: #333;
      font-size: 1.3rem;
      overflow: auto;
      padding: 0 1rem;
      position: absolute;
      right: 0;
      width: 12rem;

      .cart-dropdown__list {
        list-style: none;

        li {
          margin: 1rem 0;
        }
      }
    }
  }
}

// https://sass-lang.com/documentation/style-rules/parent-selector
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .product {
    border: 1px solid lightgray;
    border-radius: 10px;
    margin: 2rem;
    padding: 1rem;

    &__header {
      font-size: 2rem;
      text-align: center;
    }

    &__image {
      display: block;
      margin: 1rem auto;
    }

    &__description {
      font-size: 1.3rem;
      margin-top: 1rem;
    }
  }
}

// https://sass-lang.com/documentation/style-rules/parent-selector
.cart {
  margin-top: 2rem;
  text-align: center;

  &__button {
    background: lightblue;
    border: 0;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
    height: 2.5rem;
    width: 2.5rem;
  }

  &__quantity {
    font-size: 1.5rem;
    margin: 0 1rem;
  }
}
</style>