<template>
  <header class="Header">
    <a href="/" class="Header-logo-link">
      <img
        src="../assets/images/LOGOTIPO_DICAR.png"
        alt="DICAR importadora S.A.S"
        class="Header-logo"
      />
    </a>
    <nav class="Navigation">
      <ul class="Header-items">
        <li class="Header-item">
          <router-link class="Header-link" to="/productos">Productos</router-link>
        </li>
        <li class="Header-item">
         <router-link to="/empresa" class="Header-link">Empresa</router-link>
        </li>
        <li class="Header-item">
          <router-link class="Header-link" to="/contacto">Contactos</router-link>
        </li>
      </ul>
      <div class="Header-search">
        <button
          type="submit"
          class="Header-searchButton"
          name="search"
          id="search"
        >
          <i class="fa fa-search"></i>
        </button>
        <input
          class="Header-searchText"
          id="Search"
          type="text"
          name="q"
          placeholder="Buscar"
        />
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.Header {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    margin: 0 6%;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    &-logo-link {
        width: 19%;
    }
    &-logo {
        width: 100%;
    }
    .Navigation {
        position: relative;
        width: 81%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-end;
    }
    &-items {
        width: 70%;
        font-weight: bold;
        font-size: 16px;
        list-style: none;
        display: flex;
        justify-content: flex-end;
        padding: 0;
    }
    &-item {
        margin: 0;
        padding: 0 6% 0 0;
        box-sizing: border-box;
        width: fit-content;
    }
    &-link:link,
    &-link:visited {
        color: #201E1E;
    }
    &-search {
        position: relative;
        box-sizing: content-box;
        height: 30px;
        border-radius: 15px;
        background-color: #d2d2d2;
        display: flex;
        width: 30%;
        input,
        button {
            background-color: #d2d2d2;
            border: none;
            margin: 0;
            padding: 0;
            display: inline-block;
        }
        input::placeholder {
            color: #8e8e8e;
        }
        input {
            color: #8e8e8e;
            font-weight: bold;
            font-size: 24px;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
            width: 80%;
        }
        button {
            color: #8e8e8e;
            display: inline-block;
            position: relative;
            margin-left: 0.5em;
            margin-right: 0.5em;
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
        }
    }
}
</style>
