<template>
  <main class="Content">
    <article class="Article">
      <div class="Article-grid">
        <section class="Banner">
          <img
            class="Banner-image"
            src="../assets/images/Mask_Group_1.png"
            alt="Machines"
          />
          <h1 class="Banner-title">
            Te brindamos las herramientas para construir el futuro
          </h1>
        </section>
        <section class="Products">
          <h4 class="Products-subtitle">Productos destacados</h4>
          <h3 class="Products-title">Cilindros hidráulicos y gatos</h3>
          <div class="Products-image">
            <img
              src="../assets/images/cilindros_y_gatos.png"
              alt="Cilindros y gatos"
              class="Big-image"
            />
          </div>
          <p class="Products-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime non
            ab in iusto nam? Molestias a temporibus laborum veniam quos nisi
            provident omnis totam earum enim, hic similique in ipsam.
            <span class="Watch-Products">
              <a href="./productCards.html" class="link">Ver productos</a>
            </span>
          </p>
          <h2 class="Products-tag Big-font">PRODUCTOS</h2>
        </section>
      </div>
      <section class="Us">
        <h2 class="Us-tag Big-font">NOSOTROS</h2>
        <div class="Us-content">
          <h3 class="Us-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sunt autem ut beatae expedita sit.
          </h3>
          <p class="Us-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            inventore saepe cum mollitia quos eius dignissimos illum, nisi
            aliquam blanditiis. Dolorem maiores adipisci
          </p>
          <div class="Us-video">
            <video
              src="https://www.youtube.com/watch?v=OYgqvo4nomU&ab_channel=RobynAdeleAnderson"
              controls
            >
              <code>video</code>
            </video>
          </div>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  },
};
</script>

<style>
@import url("../assets/styles/style.css");
</style>
