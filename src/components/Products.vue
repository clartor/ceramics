<template>
  <div class="container">
    <h1>Mandys Keramik</h1>
    <section class="moodpic">
      <img
        src="../../public/keramikBilder/mood-min.jpeg"
        alt=""
        class="bild1"
      />
    </section>

    <p>
      Med noggrann utvald lera från hemliga och magiska platser vid västkusten
      har jag skapat keramik som passar alla hem. I naturen finner man lugn och
      ro, därför skapar jag alltid mina varor helt näck på klipporna vid
      soluppgång eller solnedgång. Ni kan känna varje drag, ni kan smaka min
      själ när era läppar rör koppens kant, det är en helhetsupplevelse ni kan
      få varje dag.
    </p>

    <div id="imagelist">
      <h1>Products</h1>
      <div class="products">
        <div class="testtest" v-for="(product, index) in products" :key="index">
          <router-link :to="product.link">
              <img :src="product.image"/></router-link>
          <h3>{{product.name}}<div class="cost">{{product.cost}}</div></h3>
          <br />
          <button v-on:click="addItemToCart(product)">Add to cart</button>
        </div>
      </div>
    </div>
    <p>
      <br />
      Köp allt, jag lovar att det är värt det.
      <br />
      <br />
      Alla våra produkter är veganska. När vi tar upp leran så går vi noga
      igenom den så att ingen mask, larv, bagge eller fisk skadas.
      <br />
      För varje produkt ni köper så planterar vi ett träd i Kiruna. Istället för
      att skydda kopparna med bubbelplast tar vi begagnade kläder från hemlösa
      och skyddar produkterna. För att minska miljöpåverkan levereras allt med
      cykel. Planera ditt köp, leveransen kan ta allt från en dag till 1 år,
      berorende på hur vältränad budet är.
    </p>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      products: [
        {
          name: "Slätis",
          cost: "130 kr",
          image: "../keramikBilder/kopparSläta.jpg",
          link: "/slatis",
        },
        {
          name: "Lugn",
          cost: "222 kr",
          image: "../keramikBilder/koppUtanÖra.jpg",
          link: "/Lugn",
        },
        {
          name: "Kaffe",
          cost: "150 kr",
          image: "../keramikBilder/brunMugg.jpg",
          link: "/Kaffe",
        },
        {
          name: "Ribbis",
          cost: "130 kr",
          image: "../keramikBilder/kopparRibb.png",
          link: "/Ribbis",
        },
        {
          name: "Lill-Öra",
          cost: "150 kr",
          image: "../keramikBilder/kopparSmåÖron.png",
          link: "/LillOra",
        },
        {
          name: "Oljeflaska",
          cost: "475 kr",
          image: "../keramikBilder/olja.jpg",
          link: "/Oljeflaska",
        },
        {
          name: "Kannor",
          cost: "590 kr",
          image: "../keramikBilder/kannaEn.jpg",
          link: "/Kannor",
        },
        {
          name: "Mortlar",
          cost: "529 kr",
          image: "../keramikBilder/mortel.jpg",
          link: "/Mortlar",
        },
        {
          name: "Krukor",
          cost: "650 kr",
          image: "../keramikBilder/kruka.jpg",
          link: "/Krukor",
        },
      ],
    };
  },
  methods: {
    addItemToCart(product) {
      this.$emit("addItemToCart", product);
    },
  },
};
</script>

<style>

</style>