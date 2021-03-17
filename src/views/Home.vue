<template>
<body>
<h1>Mandys Keramik</h1>
 <img class="moodpic" src="../../public/keramikBilder/mood.jpeg" alt="">
  <!--<div class="bilder">
    <img src="../../public/Keramik/kannaTre.png" alt="">
    <img src="../../public/Keramik/kannaEn.png" alt="">
    <img src="../../public/Keramik/kopparRibb.png" alt="">
    <img src="../../public/Keramik/kopparSläta.png" alt="">
    <img src="../../public/Keramik/kopparSmåÖron.png" alt="">
    <img src="../../public/Keramik/Mortlar.png" alt="">
    <img src="../../public/Keramik/Servett.png" alt="">
  </div> -->
</body>
</template>

<script>

export default {
  
}
</script>
<style>

#container {
    width: 90%;
    margin: 0 auto;
    gap: 2%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
}

.bilder{
  grid-column: 3/10;

}
.moodpic{
  grid-column: 1/12;
 size: smaller;
}

</style>
