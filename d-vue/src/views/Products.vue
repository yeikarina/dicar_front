<template>
  <main class="Content">
    <article class="Article">
      <div class="Article-grid">
        <section class="Banner">
          <img
            class="Banner-image Banner-products-image"
            src="../assets/images/banner_newepulse.png"
            alt="Enerpack Boxes"
          />
          <h1 class="Banner-title Background-none">
            Somos distribuidores oficiales de enerpac en Colombia
          </h1>
        </section>
        <section class="Products No-flex">
          <h4 class="Products-subtitle">Principales ventas</h4>
          <h3 class="Products-title">Cilindros hidráulicos y gatos</h3>
          <div class="Products-outLeft">
            <img
              src="../assets/images/cilindros_y_gatos.png"
              alt="Cilindros y gatos"
              class="Big-image"
            />
            <div class="Products-images">
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
            <p class="Products-text">
              Enerpac ofrece la gama más amplia de cilindros hidráulicos, gatos
              y sistemas de elevación, con soporte total y disponible a través
              de la cadena mundial de distribuidores más extensa.
              <span class="Watch-Products">
                <button @click="changeSelector(0, 'cilindros')" class="link">
                  Ver productos
                </button>

                <!-- <a href="./productCards.html" class="link">Ver productos</a> -->
              </span>
            </p>
          </div>
          <h2 class="Products-tag Right-tag">PRODUCTOS</h2>
        </section>
      </div>
      <section class="Components">
        <h2 class="Components-tag">COMPONENTES</h2>
        <div class="Components-content">
          <img
            class="Components-image"
            src="../assets/images/components-img.png"
            alt=""
          />
          <h3 class="Components-title">Componentes del sistema</h3>
          <p class="Components-text">
            Componentes del sistema Enerpac: La gama completa de elementos
            adicionales que necesita para completar su sistema hidráulico de
            alta presión. Todos los componentes Enerpac, concebidos para
            trabajar con sus cilindros, bombas y herramientas Enerpac, fueron
            diseñados para cumplir con las normas más exigentes. Enerpac, con su
            línea completa de mangueras hidráulicas, acoples, conectores,
            múltiples, aceites y manómetros, le brinda los accesorios para
            complementar su sistema, a la vez que asegura el funcionamiento
            eficiente, una larga vida útil y seguridad de su equipo hidráulico.
            <span class="Watch-Products">
              <a href="./productCards.html" class="link">Ver productos</a>
            </span>
          </p>
        </div>
      </section>
      <section class="Hidraulic">
        <h3 class="Hidraulic-title">Bombas hidráulicas y extractores</h3>
        <p class="Hidraulic-text">
          Las bombas hidráulicas Enerpac están disponibles en más de 1000
          configuraciones diferentes. Sean cual fueren sus necesidades en bomba
          de alta presión, velocidad, control, ciclo de rendimiento intermitente
          o de trabajo pesado, puede tener la seguridad de que Enerpac tiene la
          bomba adecuada para su aplicación. Enerpac cuenta con la más amplia
          línea de bombas de alta presión disponibles en el mercado y le ofrece
          modelos accionados manualmente o por electricidad, aire o gasolina con
          múltiples configuraciones de depósito y válvula.
        </p>
        <div class="Hidraulic-product">
          <h4 class="product-title">Bombas y accesorios</h4>
          <img src="../assets/images/5.png" alt="" class="product-image" />
          <span class="Watch-Products">
            <a href="./productCards.html" class="link">Ver productos</a>
          </span>
        </div>
        <div class="Hidraulic-product">
          <h4 class="product-title">Extractores</h4>
          <img src="../assets/images/6.png" alt="" class="product-image" />
          <span class="Watch-Products">
            <a href="./productCards.html" class="link">Ver productos</a>
          </span>
        </div>
      </section>
      <section class="Products Lifting">
        <h3 class="Products-title">Heavy Lifting Technology</h3>
        <div class="Products-image Lifting-image">
          <img
            src="../assets/images/cilindros_y_gatos.png"
            alt="Cilindros y gatos"
            class="Big-image"
          />
        </div>
        <p class="Products-text">
          Diseñamos y fabricamos equipos para elevación pesada. Durante más de
          60 años, hemos combinado hidráulica de alta presión y controles para
          entregar soluciones inteligentes e innovadoras que mantienen el nivel
          más alto de calidad, fiabilidad y seguridad. Nos guía la pasión por
          solucionar sus desafíos juntos. Seremos su suministrador y su socio;
          le apoyaremos a lo largo de toda la vida de su proyecto, su éxito es
          nuestro éxito.
          <span class="Watch-Products">
            <a href="./productCards.html" class="link">Ver productos</a>
          </span>
        </p>
        <h2 class="Products-tag Right-tag">CARGA PESADA</h2>
      </section>
      <section class="Components">
        <h2 class="Components-tag Long-tag">PERSONALIZADOS</h2>
        <div class="Components-content">
          <img
            class="Components-image"
            src="../assets/images/soluciones.png"
            alt=""
          />
          <h3 class="Components-title">Soluciones personalizadas de Enerpac</h3>
          <p class="Components-text">
            Cuando su aplicación requiere algo más que un producto hidráulico de
            alta fuerza estándar solo tiene que recurrir a nuestro equipo de
            Productos y Soluciones Personalizadas. Con más de 50 años prestando
            soporte a los mercados industriales, nuestro grupo
            multidisciplinario de ingenieros, diseñadores y especialistas en
            productos trabajará con usted para entender su aplicación específica
            y crear una solución llave en mano económica.
            <span class="Watch-Products">
              <a href="./productCards.html" class="link">Ver productos</a>
            </span>
          </p>
        </div>
      </section>
      <section class="Hidraulic Tools">
        <h3 class="Hidraulic-title">Herramientas</h3>
        <p class="Hidraulic-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet
          porttitor nisi, et hendrerit libero interdum in. Nullam accumsan eros
          sed turpis bibendum, in dictum tellus consectetur. Fusce elementum
          neque a ante elementum pulvinar. In lacus quam, tristique varius
          tempor posuere, elementum sit amet dui. Maecenas id erat ex. Vivamus
          in iaculis enim. Donec eget faucibus justo. Praesent efficitur est eu
          odio scelerisque euismod. Curabitur vestibulum sodales augue, vel
          tincidunt velit interdum vulputate.
        </p>
        <div class="Hidraulic-product">
          <h4 class="product-title">Herramientas para sujeción</h4>
          <img src="../assets/images/5.png" alt="" class="product-image" />
          <span class="Watch-Products">
            <a href="./productCards.html" class="link">Ver productos</a>
          </span>
        </div>
        <div class="Hidraulic-product">
          <h4 class="product-title">Herramientas Equalizer para bridas</h4>
          <img src="../assets/images/6.png" alt="" class="product-image" />
          <span class="Watch-Products">
            <a href="./productCards.html" class="link">Ver productos</a>
          </span>
        </div>
        <div class="Hidraulic-product">
          <h4 class="product-title">Herramientas Enerpac</h4>
          <img src="../assets/images/6.png" alt="" class="product-image" />
          <span class="Watch-Products">
            <a href="./productCards.html" class="link">Ver productos</a>
          </span>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: "Products",
  computed: {},
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

<style lang="scss" scoped>
.Article {
  section.No-flex {
    display: inline-block;
  }
  .Products {
    margin-bottom: 11%;
    width: 65%;
    &-outLeft {
      width: 119.7%;
      display: flex;
      flex-flow: row wrap;
      position: relative;
      align-items: center;
      right: 19.7%;
      .Products-images {
        width: 9.7%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        position: relative;
        margin-left: 1.8%;
        margin-right: 5%;
      }
      .Big-image {
        width: 39.9%;
        height: auto;
        position: relative;
        box-sizing: border-box;
      }
      .small {
        position: relative;
        width: 100%;
        margin: 0;
        display: inline;
        padding: 0;
      }
      .small:nth-of-type(2) {
        margin: 16.2% 0;
      }
      .Products-text {
        position: relative;
        width: 41.5%;
        padding-right: 5%;
        font-size: 16px;
      }
    }
    &-tag {
      position: relative;
      text-align: center;
    }
    .Right-tag {
      font-size: 5.625vw;
      color: #fdf1b9;
      line-height: 49.75px;
    }
  }
  .Components {
    width: 77.5%;
    min-width: 32em;
    min-height: 60vw;
    height: 60%;
    align-self: flex-start;
    position: relative;
    &-tag {
      color: #ffffff;
      font-size: 5.625vw;
      position: absolute;
      left: 0%;
      transform: rotateZ(90deg);
      transform-origin: 4% 52%;
    }
    .Long-tag {
      color: #fdf1b9;
      transform-origin: 8% 12%;
    }
    &-content {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      position: relative;
      top: -4em;
      left: 13.05%;
      width: 75%;
      height: 100%;
    }
    &-text {
      margin-top: 0;
      font-size: 16px;
      width: 100%;
      max-width: 40em;
      min-width: 63%;
    }
    &-image {
      width: 63%;
    }
  }
  .Hidraulic {
    align-self: center;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    width: 85.3%;
    box-sizing: border-box;
    justify-content: space-evenly;
    &-title {
      width: 100%;
      text-align: center;
    }
    &-text {
      width: 85%;
      font-size: 16px;
    }
    &-product {
      width: 35%;
      position: relative;
      display: flex;
      flex-flow: column nowrap;
      .product-title {
        font-size: 27.5;
        font-weight: 700;
      }
      .product-image {
        width: 100%;
      }
    }
    span.Watch-Products {
      margin-bottom: 4em;
    }
  }
  .Lifting {
    width: 67%;
    &-image {
      left: -10%;
    }
    .Products-text {
      font-size: 16px;
    }
  }
  .Tools {
    .Hidraulic-product {
      width: 23.3333%;
      min-width: 10em;
      padding: 0.5em;
      justify-content: flex-end;
      .product-title {
        height: 50%;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .Article {
    .Products {
      &-outLeft {
        width: 100%;
        right: 5%;
        flex-wrap: wrap;
        .Big-image {
          width: 70%;
        }
        .Products-images {
          width: 17%;
        }
        .Products-text {
          width: 80%;
          margin-left: auto;
          margin-right: auto;
          padding-right: 0;
          margin-top: 2em;
          left: 6%;
        }
      }
    }
  }
}
</style>
