<template>
  <main class="Content">
    <article class="Article">
      <section class="Product No-flex">
        <div class="Product-outContent">
          <div class="Div-images">
            <img
              src="../assets/images/cilindros_y_gatos.png"
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
           
            <h3 class="Product-title"> Serie {{ infoProduct.serie }}</h3>
            <p v-for="(descripcion,index) in infoProduct.descripcion" :key="index">
              {{infoProduct.descripcion[index]}}
            </p>
            <p>
              Las roscas del collar y del émbolo, así como los orificios de
              montaje en la base facilitan la fijación de piezas (en la mayoría
              de los modelos)
            </p>
            <p>
              Diseñado para usarse en cualquier posición La aleación de acero de
              alta resistencia ofrece mayor durabilidad
            </p>
            <p>
              Niquelado disponible en la mayoría de los modelos (para obtener
              más detalles, pongase en contacto con Enerpac)
            </p>
            <p>Resortes de retorno aptos para trabajos pesados.</p>
            <p>
              Acabado de esmalte horneado para una mayor resistencia a la
              corrosión Todos los modelos incluyen acople CR-400 y tapa
              guardapolvo
            </p>
          </div>
        </div>
      </section>
      <productTable />
    </article>
  </main>
</template>

<script>
import ProductTable from "../components/product-table.vue";
// import { mapState } from "vuex";

export default {
  name: "producto",
  data() {
    return {
      
      }
  },
  props: {
    infoProduct: {}
    
  },
  components: {
    ProductTable
  },
  computed: {
    // ...mapState(["title","serieRc"]),
  },
  methods: {

  }
};
</script>

<style></style>
