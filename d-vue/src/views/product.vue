<template>
  <main class="Content">
    <article class="Article">
      <section class="Product No-flex">
        <div class="Product-outContent">
          <div class="Div-images">
            <img
              :src="require(`../assets/images/${$store.state.producto}/${selectSerie.serie}.jpg`)"
              alt="Cilindros y gatos"
              class="Product-image"
            />
            <div class="Product-images">
              <img
                src="../assets/images/descarga.png"
                alt="image1"
                class="small"
              />
              <img
                src="../assets/images/descarga.png"
                alt="image2"
                class="small"
              />
              <img
                src="../assets/images/descarga3.png"
                alt="image3"
                class="small"
              />
            </div>
          </div>
          <div class="Product-text">
           
            <h3 class="Product-title"> Serie {{ selectSerie.serie }}, {{selectSerie.titulo}}</h3>
            <p v-for="(descripcion,index) in selectSerie.descripcion" :key="index">
              {{selectSerie.descripcion[index]}}
            </p>
          </div>
        </div>
      </section>
      <productTable :productos="selectSerie.productos" :serie="selectSerie.serie"/>
    </article>
  </main>
</template>

<script>
import ProductTable from "../components/product-table.vue";
import { mapState } from "vuex";

export default {
  name: "producto",
  data() {
    return {
      }
  },
  components: {
    ProductTable
  },
  computed: {
    ...mapState(["selectSerie"]),
  },
  methods: {

  }
};
</script>

<style></style>
