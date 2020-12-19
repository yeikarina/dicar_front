<template>
  <div class="Card-product">
    <img class="Card-image" src="../assets/images/cilindro.png" alt="" />
    <h3 class="Card-title">Serie {{ info.serie }}, {{ info.titulo }}</h3>
    <p class="Card-text">
      Capacidad: 5-100 toneladas Carrera: 0.63-14.25 pulgadas Presión máxima de
      servicio: 10,000 psi
    </p>
    <span class="Watch-Products">
      <!-- <a href="./productInfo.html" class="link">Ver productos</a> -->
    </span>
  </div>
</template>

<script>
export default {
  name: "pCard",
  props: {
    info: Object,
  },
};
</script>

<style>
</style>