<template>
  <main class="Content">
    <article class="Article">
      <section class="Contact">
        <div class="Contact-content">
          <h3 class="Contact-title">Formulario de contacto</h3>
          <form action="" class="Contact-form">
            <input
              class="Contact-input"
              type="text"
              name="name"
              placeholder="Nombre"
              tabindex="1"
            />
            <input
              class="Contact-input"
              type="text"
              name="lastNambe"
              id=""
              placeholder="Apellido"
              tabindex="2"
            />
            <input
              class="Contact-input"
              type="number"
              name="phone"
              placeholder="Telefono"
              tabindex="3"
            />
            <input
              class="Contact-input"
              type="text"
              name="company"
              placeholder="Empresa"
              tabindex="4"
            />
            <input
              class="Contact-input"
              type="email"
              name="email"
              placeholder="Correo electrónico"
            />
            <input
              class="Contact-input Contact-button"
              type="button"
              value="Enviar"
            />
          </form>
        </div>
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
export default {
  name: "contacto",
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
  &-form {
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    width: 100%;
    position: relative;
  }
  &-input {
    line-height: 2.5em;
    border-radius: 10px;
    border: none;
    box-sizing: border-box;
    width: 32%;
    margin-bottom: 2%;
    padding-left: 4%;
    color: #201e1e;
  }
  &-input:nth-of-type(4),
  &-input:nth-of-type(5) {
    width: 48%;
  }
  &-input::placeholder {
    color: #000000;
    font-weight: 500;
  }
  &-button {
    width: 20%;
    min-width: 8em;
    border-radius: 25px;
    padding-left: 0;
    color: #f7cf18;
    background-color: #201e1e;
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