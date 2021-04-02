<template>
    <div>

    <link rel="stylesheet" href="../../style.css" />
        <br>  <!--Logged In-->
        <span v-if="loggedIn"><button class="logUtKnapp" @click="signOut">Sign Out</button></span>    <!-- Sign Out Button - Only Visible if logged in -->
        <span v-else></span>  <!--No-->
        <div>                      <!--  v-if="firebase.auth().currentUser"   -->
            <!--<button @click="signOut">Sign Out</button>-->
        </div>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
    created() {                       /* Sign Out Logic */
        firebase.auth().onAuthStateChanged(user=> {
            this.loggedIn = !!user;
            // if(user){
            //     this.loggedIn = true;
            // } else {
            //     this.loggedIn = false;
            // }
        })
    },
    data() {
        return {
            loggedIn: false
        }
    },
    methods: {
        async signOut() {             /* Sign Out Logic */
            try {
                const data = await firebase.auth().signOut();
                console.log(data);
                this.$router.replace({name: "Login"})
            } catch (err) {
                console.log(err)
            }

        }
    }

}
</script>


<style lang="scss" scoped>

</style>
