<template>
 <div class="login">
  <link rel="stylesheet" href="../../style.css">
   <h1>Login</h1>
   <form @submit.prevent="pressed"> 
     <input type="text" placeholder="Email" v-model="email"/>
     <input type="password" placeholder="Lösenord" v-model="password"/>
     <input type="submit" value="Login" />
     <p class="loginLink">Inte medlem än? <router-link to="/register">Registrera här</router-link></p>
   </form>
    <p class="backLink"><router-link to="/">Tillbaka till start</router-link></p>
 </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
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