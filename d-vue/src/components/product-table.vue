<template>
  <section class="Table">
    <table>
      <tr>
        <th>Número de modelo</th>
        <th>Capacidad del cilindro</th>
        <th>Carrera</th>
        <th>Área efectiva del cilindro</th>
        <th>Volumen de aceite</th>
        <th>Altura retraído</th>
        <th>Peso</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr v-for="(producto, index) in productos" :key="index">
        <td>{{ serie }} - {{ producto.numeroSerie }}</td>
        <td>{{ producto.valores_tabla_imperial.capacidad_cilindro }}</td>
        <td>{{ producto.valores_tabla_imperial.carrera }}</td>
        <td>{{ producto.valores_tabla_imperial.area_efectiva_cilindro }}</td>
        <td>{{ producto.valores_tabla_imperial.volumen_aceite }}</td>
        <td>{{ producto.valores_tabla_imperial.altura }}</td>
        <td>{{ producto.valores_tabla_imperial.peso }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  name: "product-table",
  props: {
    productos: Array,
    serie: String,
  },
};
</script>

<style scoped>
td {
  text-align: center;
}
</style>
