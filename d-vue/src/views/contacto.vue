<template>
  <main class="Content">
        <article class="Article">
            <section class="Contact">
                <div class="Contact-content">
                    <h3 class="Contact-title">Formulario de contacto</h3>
                    <form action="" class="Contact-form">
                        <input class="Contact-input" type="text" name="name" placeholder="Nombre" tabindex="1">
                        <input class="Contact-input" type="text" name="lastNambe" id="" placeholder="Apellido"
                            tabindex="2">
                        <input class="Contact-input" type="number" name="phone" placeholder="Telefono" tabindex="3">
                        <input class="Contact-input" type="text" name="company" placeholder="Empresa" tabindex="4">
                        <input class="Contact-input" type="email" name="email" placeholder="Correo electrónico">
                        <input class="Contact-input Contact-button" type="button" value="Enviar">
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
                    <div class="Location-map" id="map"></div>
                </div>
                <h2 class="Location-tag Big-font">TIENDA</h2>
            </section>
            <section class="Phone">
                <h3 class="Phone-title">Teléfonos y contactos</h3>
                <div class="Phone-info">
                    <i class="fas fa-phone-square-alt Phone-icon"></i>
                    <p>(+57) 3797837 / (+57) 322 465 7319</p>
                </div>
                <div class="Phone-info">
                    <i class="fas fa-mail-bulk Message-icon"></i>
                    <p>financiero@dicar.co</p>
                </div>
            </section>
        </article>
    </main>
</template>

<script>
export default {
name: "contacto"
}
</script>

<style>

</style>