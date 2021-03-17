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
    <p class="navbar">navbar   navbar   navbar   navbar   navbar</p>
    
      <div id="imagelist">
        <!-- bilder = 320x320px -->
        
        <a href="">
        <img src="../../public/keramikBilder/kopparSläta.png" alt="" class="produkt2"/>
        <p>Slätis</p></a>
        <a href="">
        <img src="../../public/keramikBilder/koppUtanÖra.jpg" alt="" class="produkt9"/>
        <p>Muggar</p></a>
        <a href="">
        <img src="../../public/keramikBilder/brunMugg.jpg" alt="" class="produkt10"/>
        <p>Kaffe</p></a>
        <a href="">
        <img src="../../public/keramikBilder/kopparRibb.png" alt="" class="produkt3"/>
        <p>Ribbis</p></a>
        <a href="">
        <img src="../../public/keramikBilder/kopparSmåÖron.png" alt="" class="produkt1"/>
        <p>Lill-öra</p></a> 
        <a href="">
        <img src="../../public/keramikBilder/olja.jpg" alt="" class="produkt5"/>
        <p>Oljeflaska</p></a>
        <a href="">
        <img src="../../public/keramikBilder/kannaEn.jpg" alt="" class="produkt4"/>
        <p>Kannan</p></a>
        <a href="">
        <img src="../../public/keramikBilder/Mortlar.png" alt="" class="produkt6"/>
        <p>Mortla</p></a>
        <!-- <a href="">
        <img src="../../public/keramikBilder/Servett.png" alt="" class="produkt7"/>
        <p>Servettringar</p></a> -->
        <a href="">
        <img src="../../public/keramikBilder/kruka.jpg" alt="" class="produkt8"/>
        <p>Krukan</p></a>
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
  font-size: 38px;
}
body{
  background-color: rgb(247, 241, 236);
}
.moodpic {
  /* grid-column: 0/12; */
  grid-row: 2/4;
}
p{
  font-size: 20px;
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
#imagelist img {
  -webkit-border-radius: 4px;
  border-radius: 4px;
}
#imagelist img:hover {
  opacity: 0.75;
}



</style>
