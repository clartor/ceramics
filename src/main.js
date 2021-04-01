import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import firebase from 'firebase/app'
// import firebase from 'firebase';
// import "firebase/app";
import firebase from 'firebase/app';
import 'firebase/auth'; 
// import 'firebase/database'; // If using Firebase database
// import 'firebase/storage';  // If using Firebase storage

const firebaseConfig = {
  apiKey: "AIzaSyCwlCgDkhHAYIMTSPXB8XCybkpeBPpDyb0",
  authDomain: "ceramics-bff60.firebaseapp.com",
  projectId: "ceramics-bff60",
  storageBucket: "ceramics-bff60.appspot.com",
  messagingSenderId: "130941596236",
  appId: "1:130941596236:web:e09a6783e34a72e7e63ae9"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
