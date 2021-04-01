<template>
  <div class="register">
    <link rel="stylesheet" href="../../style.css" />
    <h1>Register</h1>
    <form @submit.prevent="Register">
      <input type="text" placeholder="Email" v-model="email"/>
      <input type="password" placeholder="Password" v-model="password"/>
      <!-- <input type="password" placeholder="Repeat Password"/> must match -->
      <input type="submit" value="Register" />
      <p class="loginLink">Redan medlem? <router-link to="/login">Logga in här</router-link></p>
    </form>
  <p class="backLink"><router-link to="/">Tillbaka</router-link></p>
  </div>
</template>

<script>
import firebase from "firebase";
import { ref } from "vue";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((data) => console.log(data))
        .catch((err) => alert(err.message));
    };
    //     .then((user) => {
    //       alert(user);
    //     })
    //     .catch((err) => alert(err.message));
    // };
    return {
      Register,
      email,
      password,
    };
  },
};
</script>

<style>
</style>