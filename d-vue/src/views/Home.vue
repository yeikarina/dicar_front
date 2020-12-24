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
              <button @click="changeSelector(0, 'cilindros')" class="link">
                Ver productos
              </button>
            </span>
          </p>
          <h2 class="Products-tag Big-font">PRODUCTOS</h2>
        </section>
      </div>
      <section class="Us">
        <h2 class="Us-tag Big-font">NOSOTROS</h2>
        <div class="Us-content">
          <h3 class="Us-title">¿Quienes somos?</h3>
          <p class="Us-text">
            Nuestra compañía se dedicada a la importación, comercialización,
            mantenimiento y alquiler de equipos hidráulicos, siendo distribuidor
            directo en Colombia de la compañía americana ENERPAC, líder mundial
            en herramientas y tecnología Hidráulica. Fue creada el 04 de mayo de
            2016 en Cali, con domicilio en la Calle 34 #2C-66 del barrio
            porvenir, de la ciudad de Cali.
          </p>
          <p class="Us-text">
            Enerpac, es líder en el mercado mundial de herramientas hidráulicas
            de alta presión, productos de fuerza controlada y soluciones para el
            posicionamiento preciso de cargas pesadas. Enerpac fabrica
            productos, desde el cilindro hidráulico mas pequeño hasta sistemas
            completos de posicionamiento y elevación operados por computadora,
            brindando soluciones innovadoras que aumenten la productividad, son
            rentables y hacen que el trabajo sea mas seguro y fácil de realizar.
          </p>
          <p class="Us-text">
            DICAR IMPORTADORA S.A.S, cuenta con un equipo de trabajo calificado
            y alta experiencia para el asesoramiento para atender los
            requerimientos y necesidades de nuestros clientes.
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
  methods: {
    changeSelector(selectProduct, producto) {
      let payload = { selectProduct, producto };
      this.$store.commit("changeSelector", payload);
      this.$router.push({
        name: "lista",
        params: {
          producto: producto,
        },
      });
    },
  },
  components: {},
};
</script>

<style>
@import url("../assets/styles/style.css");
</style>
