<template>
  <div id="app">
    <top-header></top-header>
    <div id="nav">
      <router-link to="/">Varor</router-link> |
      <router-link to="/kassa">Kassa</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import TopHeader from "./components/Top-Header";

export default {
  components: {'top-header': TopHeader}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: burlywood;
    }
  }
}
h1{
  font-size: 26px;
  font-family: "Lucida Console", "Courier New", monospace;
  // border: solid 1px;
  padding: 10px;
  text-decoration: underline;
  line-height: 1.8;
}
.varor p{
  font-size: 20px;
  font-family: "Lucida Console", "Courier New", monospace;
  border: solid 1px;
  padding: 20px;
  line-height: 1.8;
  width: fit-content;
  text-align: justify;
}
button{
  font-size: 14px;
  font-family: "Lucida Console", "Courier New", monospace;
  border: solid 1px;
  padding: 10px;
}
.varor{
  font-size: 0;
  width: 1220px;
  margin: 0 auto;
  
}
.varor a {
  margin: 40px;
  /* border: 3px solid transparent; */
  display: inline-block;
  /* -webkit-border-radius: 8px;
  border-radius: 8px; */
}
.varor img {
  padding: 5px;
  -wevarorbkit-border-radius: 4px;
  border-radius: 8px;
  
}
// .varor img:hover {
//   opacity: 0.25;
// }
</style>
