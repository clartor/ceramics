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
      I naturen finner man lugn och ro, därför skapar jag alltid mina varor helt näck på klipporna vid soluppgång eller solnedgång. 
      Ni kan känna varje drag, ni kan smaka min själ när era läppar rör koppens kant, det är en helhetsupplevelse ni kan få varje dag.
     </p>
    
      <div id="imagelist">
        <!-- bilder = 320x320px -->
        
        <router-link to="/slatis">
        <img src="../../public/keramikBilder/kopparSläta.png" alt="" class="produkt2"/>
        <p>Slätis</p></router-link>
        <router-link to="/lugn">
        <img src="../../public/keramikBilder/koppUtanÖra.jpg" alt="" class="produkt9"/>
        <p>Lugn</p></router-link>
        <router-link to="/kaffe">
        <img src="../../public/keramikBilder/brunMugg.jpg" alt="" class="produkt10"/>
        <p>Kaffe</p></router-link>
        <router-link to="/ribbis">
        <img src="../../public/keramikBilder/kopparRibb.png" alt="" class="produkt3"/>
        <p>Ribbis</p></router-link>
        <router-link to="/lillOra">
        <img src="../../public/keramikBilder/kopparSmåÖron.png" alt="" class="produkt1"/>
        <p>Lill-öra</p></router-link> 
        <router-link to="/oljeflaska">
        <img src="../../public/keramikBilder/olja.jpg" alt="" class="produkt5"/>
        <p>Oljeflaska</p></router-link>
        <router-link to="/kannor">
        <img src="../../public/keramikBilder/kannaEn.jpg" alt="" class="produkt4"/>
        <p>Kannor</p></router-link>
        <router-link to="/mortlar">
        <img src="../../public/keramikBilder/Mortlar.png" alt="" class="produkt6"/>
        <p>Mortlar</p></router-link>
        <router-link to="/krukor">
        <img src="../../public/keramikBilder/kruka.jpg" alt="" class="produkt8"/>
        <p>Krukor</p></router-link>
      </div>

      <p>
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
      För att minska miljöpåverkan levereras allt med cykel. Planera ditt köp, leveransen kan ta allt från en dag till 1 år, berorende på hur vältränad budet är.
      </p>

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
  font-family: "Lucida Console", "Courier New", monospace;
  border: solid 1px;
  padding: 20px;
  line-height: 1.8;
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
