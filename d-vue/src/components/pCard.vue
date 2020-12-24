<template>
  <div class="Card-product">
    <img class="Card-image" :src="require(`../assets/images/${$store.state.producto}/${info.serie}.jpg`)" alt="" />
    <h3 class="Card-title">Serie {{ info.serie }}, {{ info.titulo }}</h3>
    <p class="Card-text">
      Capacidad: 5-100 toneladas Carrera: 0.63-14.25 pulgadas Presión máxima de
      servicio: 10,000 psi
    </p>
    <span class="Watch-Products"> </span>
  </div>
</template>

<script>
export default {
  name: "pCard",
  props: {
    info: Object,
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.Card-product {
        display: flex;
        align-items: center;
        flex-flow: column nowrap;
        width: 30%;
        background-color: #f7cf18;
        padding-top: 2.5em;
        margin-top: 4%;
        .Card-image {
            width: 80%;
        }
        .Card-title {
            width: 80%;
            font-size: 27.5px;
            margin-bottom: 0.5em;
        }
        .Card-text {
            width: 80%;
            font-size: 16px;
            margin: 0;
        }
        .Watch-Products {
            margin-bottom: 3em;
        }
    }
</style>