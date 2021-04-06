<template>
  <div class="register">
    <link rel="stylesheet" href="../../style.css" />
    <h1>Register</h1>
    <form @submit.prevent="pressed">
      <input type="text" placeholder="Email" v-model="email"/>
      <input type="password" placeholder="Password" v-model="password"/>
      <input type="submit" value="Register" />
      <p class="loginLink">Redan medlem? <router-link to="/login">Logga in här</router-link></p>
    </form>
  <p class="backLink"><router-link to="/">Tillbaka till start</router-link></p>
  </div>
</template>


<style>
</style>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
    methods: {
        async pressed() {
            try {

            const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            console.log(user)
            this.$router.replace({name: "Kassa"});
            } catch (err) {
                console.log(err)
            }

        }
    },
    data() {
        return {
            email: "",
            password: '',
            error: ''
        }
    }

}
</script>
