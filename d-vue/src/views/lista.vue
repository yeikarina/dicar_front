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
        <p-card />
        <p-card />
        <p-card />
        <p-card />

      </section>
    </article>
  </main>
</template>

<script>
import pCard from "../components/pCard.vue";
export default {
  name: "lista",
  components: {
    pCard,
  },
};
</script>

<style>
</style>