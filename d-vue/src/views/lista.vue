<template>
  <main class="Content">
    <article class="Article">
      <section class="Banner">
        <img
          class="Banner-image"
          src="../assets/images/banner_newepulse.png"
          alt="Machines"
        />
        <h1 class="Banner-title">CILINDROS Y GATOS</h1>
      </section>
      <section class="Cards">
        <p-card
          v-for="(item, index) in $store.state.selectProduct"
          :key="index"
          :info="item"
          @click="seleccionar(item)"
        />
      </section>
    </article>
  </main>
</template>

<script>
import pCard from "../components/pCard.vue";
export default {
  name: "lista",
  data() {
    return {};
  },
  components: {
    pCard,
  },
  methods: {
    seleccionar(item) {
      this.$router.push({name: 'product', params: {
        producto: this.$store.state.producto,
        serie: item.serie
      }});
    },
  },
  computed: {},
};
</script>

<style>
</style>