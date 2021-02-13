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
      @click="atun()"
    />
  </form>
</template>

<script>
/* eslint-disable */
var Email = {
  send: function(a) {
    return new Promise(function(n, e) {
      (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = "Send");
      var t = JSON.stringify(a);
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) {
        n(e);
      });
    });
  },
  ajaxPost: function(e, n, t) {
    var a = Email.createCORSRequest("POST", e);
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      (a.onload = function() {
        var e = a.responseText;
        null != t && t(e);
      }),
      a.send(n);
  },
  ajax: function(e, n) {
    var t = Email.createCORSRequest("GET", e);
    (t.onload = function() {
      var e = t.responseText;
      null != n && n(e);
    }),
      t.send();
  },
  createCORSRequest: function(e, n) {
    var t = new XMLHttpRequest();
    return (
      "withCredentials" in t
        ? t.open(e, n, !0)
        : "undefined" != typeof XDomainRequest
        ? (t = new XDomainRequest()).open(e, n)
        : (t = null),
      t
    );
  }
};

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
    sendMail() {
      let tempMessage = `De: ${this.form.name} \r\n Empresa: ${this.form.company} \r\n Mensaje: ${this.form.message}`;

      Email.send({
        Host: "www.dicar.co",
        Username: "senderemail@dicar.co",
        Password: "kZ1p-9&kkVs&",
        To: "senderemail@dicar.co",
        From: this.form.email,
        Subject: "This is the subject",
        Body: tempMessage
      }).then(message => alert(message));
    },
    atun() {
      console.log(this.form);
    }
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