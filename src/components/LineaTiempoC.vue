<template lang="pug">
.linea-tiempo-a
  .linea-tiempo-a__row(
    v-for="(item,index) of datos"
    :ref="'linea-tiempo-item-'+index"
  )
    .linea-tiempo-a__content
      .linea-tiempo-a__text
        .linea-tiempo-a__text__container.bg-border-primario.py-lg-3.px-lg-5.p-2
          h5.mb-2 {{item.titulo}}
          span(v-html="item.texto")

    .linea-tiempo-a__content
      .linea-tiempo-a__icon
        .linea-tiempo-a__icon__container
          .container-img-linea
            img(:src="item.icono")
</template>

<script>
export default {
  name: 'LineaTiempoC',
  props: {
    datos: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass"></style>
