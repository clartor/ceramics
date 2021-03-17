<template>
  <div class="container">
    <h1>Mandys Keramik</h1>
    <section class="moodpic">
      <img
        src="../../public/keramikBilder/mood-min.jpeg"
        alt=""
        class="bild1"
      />
      <p>navbar navbar   navbar   navbar   navbar</p>
    </section>
    
    <body>
      <section class="vara1">
        <img src="../../public/keramikBilder/kannaTre.png" alt="" class="produkt1" />
      </section>
      <section class="vara2">
        <img src="../../public/keramikBilder/kannaEn.png" alt="" class="produkt2" />
      </section>
      <section class="vara3">
        <img src="../../public/keramikBilder/kopparRibb.png" alt="" class="produkt3"/>
      </section>
      <section class="vara4">
        <img src="../../public/keramikBilder/kopparSläta.png" alt="" class="produkt4"/>
      </section>
      <section class="vara5">
        <img src="../../public/keramikBilder/kopparSmåÖron.png" alt="" class="produkt5"/>
      </section>
      <section class="vara6">
        <img src="../../public/keramikBilder/Mortlar.png" alt="" class="produkt6"/>
      </section>
      <section class="vara7">
        <img src="../../public/keramikBilder/Servett.png" alt="" class="produkt7"/>
      </section>
    </body>
  </div>
</template>

<script>
export default {};
</script>
<style>
.container {
  background-color: rgb(247, 241, 236);
  margin: 0;
  /* gap: 2%; */
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: min-content;
}
h1 {
  grid-column: 1/13;
  grid-row: 0/1;
}
.moodpic {
  grid-column: 1/13;
  grid-row: 2/4;
}
p{
  font-size: 28px;
}
body{
  grid: 'vara1, vara2, vara7'
}
/*
.vara1, .vara4, .vara7 
{
  grid-column: 1/4;
  grid-row: 5/7;
}
.vara2, .vara5 {
  grid-column: 5/9;
  grid-row: 8/10;
}
.vara3, .vara6{
  grid-column: 11/13;
  grid-row: 11/13;
} 

.produkt1, .produkt4, .produkt7 {
  width: 100%;
  box-shadow: 2px 2px 4px #000000;
  border-radius: 5%;
  grid-column: 1/4;
  margin-top: 20px;
}
.produkt2, .produkt5 {
  width: 100%;
  box-shadow: 2px 2px 4px #000000;
  border-radius: 5%;
  grid-column: 5/9;
  margin-top: 20px;
  }*/
  img {
  width: 100%;
  box-shadow: 2px 2px 4px #000000;
  border-radius: 5%;
  grid-column: 10/13;
  margin-top: 20px;
  } 
</style>
