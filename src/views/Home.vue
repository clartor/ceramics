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
    <p>Med noggrann utvald lera från hemliga och magiska platser vid västkusten har jag skapat keramik som passar alla hem. 
      I naturen finner man lugn och ro, därför skapar jag alltid mina varor på klipporna vid soluppgång eller solnedgång. 
      Ni kan känna varje drag, ni kan smaka min själ när era läppar rör koppens kant, det är en helhetsupplevelse ni kan få varje dag.
      <br> 
      Köp allt, jag lovar att det är värt det. 
      <br>
      <br>
      Alla våra produkter är veganska. När vi tar upp leran så går vi noga igenom den så att ingen mask, larv, bagge eller fisk skadas. 
      <br>
      För varje produkt ni köper så planterar vi ett träd i Kiruna. 
      <br>
      Istället för att skydda kopparna med bubbelplast tar vi begagnade kläder från hemlösa och skyddar produkterna.
      <br>
      För att minska miljöpåverkan levereras allt med cykel. Planera därför ditt köp, leveransen kan ta allt från en dag till 1 år, berorende på hur vältränad budet är.</p>
    
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
