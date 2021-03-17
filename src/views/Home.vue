<template>
  <div class="container">
  <h1>Mandys Keramik</h1>
    
    <body>
    <section class="moodpic">
      <img
        src="../../public/keramikBilder/mood-min.jpeg"
        alt=""
        class="bild1"
      />
    </section>
    <p>navbar   navbar   navbar   navbar   navbar</p>
    
      <div id="imagelist">
        <!-- bilder = 320x320px -->
        <a href="">
        <img src="../../public/keramikBilder/kopparSmåÖron.png" alt="" class="produkt1" /></a> 
        <a href="">
        <img src="../../public/keramikBilder/kopparSläta.png" alt="" class="produkt2" /></a>
        <a href="">
        <img src="../../public/keramikBilder/kopparRibb.png" alt="" class="produkt3"/></a>
        <a href="">
        <img src="../../public/keramikBilder/kannaEn.png" alt="" class="produkt4"/></a>
        <a href="">
        <img src="../../public/keramikBilder/kannaTre.png" alt="" class="produkt5"/></a>
        <a href="">
        <img src="../../public/keramikBilder/Mortlar.png" alt="" class="produkt6"/></a>
        <a href="">
        <img src="../../public/keramikBilder/Servett.png" alt="" class="produkt7"/></a>
      </div>

    </body>

  </div>
</template>

<script>
export default {};
</script>
<style>
.container {
  display: grid;
  grid-auto-rows: min-content;
  /* grid-auto-columns: min-content; */
  grid-column: (12 1fr);
}
h1 {
  grid-column: 0/12;
  grid-row: 1/2;
}
body{
  background-color: rgb(247, 241, 236);
}
.moodpic {
  /* grid-column: 0/12; */
  grid-row: 2/4;
}
p{
  font-size: 28px;
}
#imagelist{
  font-size: 0;
  width: 1220px;
  margin: 0 auto;
}
#imagelist a {
  margin: 40px;
  border: 3px solid transparent;
  display: inline-block;
  -webkit-border-radius: 8px;
  border-radius: 8px;
}
#imagelist a:hover {
  border-color:burlywood;
}
#imagelist img {
  -webkit-border-radius: 4px;
  border-radius: 4px;
}


</style>
