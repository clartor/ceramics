<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Startsida</router-link> |
      <router-link to="/kassa">Kassa</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
p{
  font-size: 20px;
  font-family: "Lucida Console", "Courier New", monospace;
  border: solid 1px;
  padding: 20px;
  line-height: 1.8;
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
