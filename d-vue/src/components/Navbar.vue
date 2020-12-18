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
          <a href="/productos" class="Header-link"> Productos </a>
        </li>
        <li class="Header-item">
          <a href="./company.html" class="Header-link"> Empresa </a>
        </li>
        <li class="Header-item">
          <a href="contact.html" class="Header-link"> Contactos </a>
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

<style>
@import url("../assets/styles/style.css");
</style>
