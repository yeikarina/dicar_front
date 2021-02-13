<template>
  <main class="Content">
    <article class="Article">
      <section class="Contact">
        <div class="Contact-content">
          <h3 class="Contact-title">Formulario de contacto</h3>
          <contact-form />
        </div>
        <!-- <div class="Contact-content">
          <h3 class="Contact-title">Trabajo en progreso</h3>
          <p class="Contact-text">
            Estamos trabajando para ofrecerte el mejor servicio, mientras
            comunicate con nosotros en el siguientes correos:
          </p>
          <ul style="list-style: none;">
            <li class="Contact-links">
              <a class="Contact-text" href="mailto:gerencia@dicar.co"
                >gerencia@dicar.co</a
              >
            </li>
            <li class="Contact-links">
              <a class="Contact-text" href="mailto:comercial@dicar.co"
                >comercial@dicar.co</a
              >
            </li>
            <li class="Contact-links">
              <a class="Contact-text" href="mailto:comercial4@dicar.co"
                >comercial4@dicar.co</a
              >
            </li>
            <li class="Contact-links">
              <a class="Contact-text" href="mailto:financiero@dicar.co"
                >financiero@dicar.co</a
              >
            </li>
          </ul>

          <p class="Contact-text">
            O puedes llamarnos directamente a los siguientes numeros:
          </p>
          <ul style="list-style: none;">
            <li class="Contact-links">
              <a class="Contact-text" href="tel:+573797837">(+57) 379 7837</a>
            </li>
            <li class="Contact-links">
              <a class="Contact-text" href="tel:+573233636670"
                >(+57) 323 363 6670</a
              >
            </li>
            <li class="Contact-links">
              <a class="Contact-text" href="tel:+573168529195"
                >(+57) 316 852 9195</a
              >
            </li>
            <li class="Contact-links">
              <a class="Contact-text" href="tel:+573053433238"
                >(+57) 305 343 3238</a
              >
            </li>
            <li class="Contact-links">
              <a class="Contact-text" href="tel:+573224657319"
                >(+57) 322 465 7319</a
              >
            </li>
          </ul>
        </div> -->
        <h2 class="Big-font Contact-tag">CONTACTO</h2>
      </section>
      <section class="Location">
        <div class="Location-content">
          <h3 class="Location-title">Ubicación tienda fisica</h3>
          <p class="Location-address">
            CALLE 34 # 2C-66 / BARRIO PORVENIR SANTIGO DE CALI
          </p>
          <iframe
            class="Location-map"
            id="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5416823326113!2d-76.51628568459475!3d3.4609273521203914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a647d7fb37c5%3A0xffea980f575026d6!2sDICAR%20Importadora%20S.A.S.!5e0!3m2!1sen!2sco!4v1608779224425!5m2!1sen!2sco"
            width="600"
            height="450"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <h2 class="Location-tag Big-font">TIENDA</h2>
      </section>
    </article>
  </main>
</template>

<script>
import contactForm from "../components/contactForm.vue";

export default {
  name: "contacto",
  components: { contactForm }
};
</script>

<style lang="scss" scoped>
// @function emTopx($fontSize, $em){
//     @return $fontSize * $em;
// }

// @function pxToem($fontSize, $px){
//     @return $px / $fontSize;
// }
.Contact {
  display: flex;
  width: 84.3%;
  flex-flow: column wrap;
  position: relative;
  margin-bottom: 5%;
  &-content {
    position: relative;
    width: 80%;
    margin-left: 8%;
  }
  &-title {
    align-self: flex-start;
  }
  &-text {
    font-size: 20px;
    color: black;
  }
  &-links {
    margin: 15px 0;
    font-weight: 600;
    a:hover {
      color: #fdf1b9;
      text-decoration: underline;
    }
  }
  &-tag {
    align-self: center;
    font-size: 68.75px;
    margin-top: 2%;
  }
}
.Location {
  @media only screen and (min-width: 768px) {
    width: 55.2%;
    min-width: 32em;
    height: 38.5vw;
    min-height: 30em;
    align-self: flex-end;
    position: relative;
    margin-bottom: 10%;
    &-title {
      margin: 0 auto;
    }
    &-address {
      font-size: 16px;
      margin: 0.8em 0;
      border-left: 3px solid black;
      padding-left: 1em;
    }
    &-content {
      position: relative;
      left: -15%;
      top: 5%;
    }
    &-tag {
      font-size: 68.75px;
      line-height: 68.75px;
      position: absolute;
      margin: 0;
      transform: rotateZ(-90deg);
      transform-origin: 19% -241%;
      bottom: 0;
      right: 0;
    }
    &-map {
      display: inline-block;
      position: relative;
      height: 35vw;
      min-height: 373px;
      width: 98.7%;
      background-color: lightgray;
    }
  }
}
</style>