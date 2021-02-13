<template>
  <form action="" class="Contact-form" method="POST">
    <label for="formname">Nombre</label>
    <input
      class="Contact-input"
      type="text"
      name="name"
      id="formname"
      placeholder="Nombre"
      tabindex="1"
      v-model="form.name"
    />
    <label for="formphone">Telefono</label>
    <input
      class="Contact-input"
      type="tel"
      id="formphone"
      name="phone"
      placeholder="Telefono"
      tabindex="3"
      v-model="form.tel"
    />
    <label for="formcompany">Empresa</label>
    <input
      class="Contact-input"
      id="formcompany"
      type="text"
      name="company"
      placeholder="Empresa"
      tabindex="4"
      v-model="form.company"
    />
    <label for="formemail">Email</label>
    <input
      class="Contact-input"
      id="formemail"
      type="email"
      name="email"
      placeholder="Correo electrónico"
      v-model="form.email"
    />
    <label for="formmessage">¿Cual es tu duda?</label>
    <textarea
      class="Contact-input"
      name="message"
      id="formmessage"
      cols="10"
      rows="4"
      v-model="form.message"
    ></textarea>
    <input
      class="Contact-input Contact-button"
      type="button"
      value="Enviar"
      @click="sendMail()"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      send: false,
      form: {
        name: "",
        tel: undefined,
        company: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    sendMail() {}
  }
};
</script>

<style lang="scss" scoped>
.Contact {
  &-form {
    display: flex;
    justify-content: space-around;
    margin: 0 0 0 5%;
    flex-flow: column wrap;
    // width: 100%;
    position: relative;
    label {
      margin: 0 0 7px 2%;
      font-weight: 700;
      color: #201e1e;
    }
  }
  &-input {
    line-height: 2.5em;
    border-radius: 10px;
    border: none;
    box-sizing: border-box;
    width: 40%;
    margin-bottom: 2%;
    padding-left: 2%;
    color: #201e1e;
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
}
</style>