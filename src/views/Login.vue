<template>
  <div class="login">
    <link rel="stylesheet" href="../../style.css" />
    <p>Du måste vara inloggad för att handla</p>
    <h1>Login</h1>
    <form @submit.prevent="pressed">
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Lösenord" v-model="password" />
      <input type="submit" value="Login" />
      <p class="loginLink">
        Inte medlem än? <router-link to="/register">Registrera här</router-link>
      </p>
    </form>
    <p class="backLink">
      <router-link to="/">Tillbaka till start</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
// import { onBeforeMount } from 'vue';
// import { useRouter } from 'vue-router';


export default {
//     mounted() {
//   this.$nextTick(function () {
//       firebase.auth().onAuthStateChanged((user) => {
//       if (!user) {
//       alert("Du måste först logga in");}
    
//       }
//   )}
// )},

//     setup () {
//     const router = useRouter();
//     // const route = useRoute();

//      onBeforeMount(() => { //innan allt montas, kolla om user
//       firebase.auth().onAuthStateChanged((user) => {// all autentisering sker genom .auth(metod)
//       if (!user) {
//         alert("Du måste vara inloggad för att handla")
//     } else if (user){ // if logged in send to home ▿ - login/register otillgängliga"
//         router.replace('/kassa')
//       }
//       });
//     });
  
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async pressed() {
            try {
                const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                console.log(val);
                this.$router.replace({name: "Secret"})
            } catch (err) {
                console.log(err)
            }
        
        }
    }
}

</script>


<style>
</style>