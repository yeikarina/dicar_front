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
            <iframe
              width="1120"
              height="630"
              src="https://www.youtube.com/embed/MRvZj2BmXF4"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
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

<style lang="scss">
@import url("../assets/styles/style.css");

@function emTopx($fontSize, $em) {
  @return $fontSize * $em;
}

@function pxToem($fontSize, $px) {
  @return $px / $fontSize;
}

.Article {
  .Products {
    grid-row: 2 / 4;
    grid-column: 1 / 2;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    min-width: 32em;
    width: 67.2%;
    align-self: flex-end;
    margin-bottom: 10%;
    &-image {
      display: inline-block;
      position: relative;
      width: 50%;
      margin: 0;
      left: -5%;
      .Big-image {
        width: 100%;
      }
    }

    .Products-subtitle {
      width: 50%;
      border-bottom: 3px solid black;
      font-weight: 700;
      text-align: center;
      margin: 0;
      line-height: 2em;
    }
    .Products-title {
      width: 100%;
      position: relative;
      left: -5%;
    }
    .Products-text {
      display: inline-block;
      box-sizing: border-box;
      padding-right: 5%;
      margin: 0;
      width: 50%;
      font-size: 16px;
    }
    .Products-tag {
      margin: 0.5em auto 0;
    }
  }
}

.Us {
  width: 71%;
  min-width: 32em;
  min-height: 55.9%;
  height: 55.9%;
  align-self: flex-start;
  position: relative;
  &-tag {
    position: absolute;
    left: 0%;
    transform: rotateZ(90deg);
    transform-origin: 10% 19%;
    font-size: 7.7vw;
  }
  &-title {
    position: relative;
    top: -1.3em;
    margin: 0;
    padding-right: 16vw;
    margin-left: 1.5vw;
  }
  &-text {
    border-left: 3px solid black;
    padding-left: 0.5em;
    margin-bottom: 2em;
    padding-right: 16vw;
    margin-left: 1.5vw;
  }
  &-content {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    position: relative;
    left: 18.4vw;
    width: 80vw;
    height: 100%;
    .Us-video {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
      margin: 5% 0 0 0;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .Article {
    .Banner {
      grid-row: inherit;
      &-title {
        font-size: 8vw;
        padding: 8% 38% 0% 8%;
      }
    }
    .Products {
      grid-row: 2 / 4;
      grid-column: 1 / 2;
      position: relative;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      min-width: 32em;
      width: 67.2%;
      align-self: flex-end;
      margin-bottom: 10%;
      &-image {
        display: inline-block;
        position: relative;
        width: 50%;
        margin: 0;
        left: -5%;
        .Big-image {
          width: 100%;
        }
      }

      .Products-subtitle {
        width: 50%;
        border-bottom: 3px solid black;
        font-weight: 700;
        text-align: center;
        margin: 0;
        line-height: 2em;
      }
      .Products-title {
        width: 100%;
        position: relative;
        left: -5%;
      }
      .Products-text {
        display: inline-block;
        box-sizing: border-box;
        padding-right: 5%;
        margin: 0;
        width: 50%;
        font-size: 16px;
      }
      .Products-tag {
        margin: 0.5em auto 0;
      }
    }
  }
  .Us {
    &-title {
      position: relative;
      top: 0;
      margin: 0;
      margin-top: 3%;
      padding-right: 16vw;
      margin-left: 1.5vw;
    }
    &-text {
      // border-left: 3px solid black;
      // padding-left: 0.5em;
      // margin-bottom: 2em;
      padding-right: 5vw;
      margin-left: 0;
    }
    &-content {
    left: 14.4vw;
    width: 80vw;
    height: 100%;
    }
    .Us-video {
      margin: 5% 0;
      iframe {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
