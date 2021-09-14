<template lang="pug">
.btns
  img(src='@/assets/curso/tema5-1-infog.svg', alt='Clasificaciones')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.p-3(v-if="index === hover")  
      h4.mb-1 {{boton.titulo}}
      p {{boton.texto}}

</template>

<script>
export default {
  name: 'BotonesA',
  data: () => ({
    indicador: true,
    hover: null,
    size: '12%',
    botones: [
      {
        img: require('@/assets/curso/tema5-1-infog1_1.svg'),
        img_h: require('@/assets/curso/tema5-1-infog1_2.svg'),
        pos_x: '29.5%',
        pos_y: '7.1%',
        titulo: 'Registros ambientales',
        texto:
          'Verifica la correcta implementación del sistema de gestión ambiental. Proporciona evidencia objetiva de las actividades realizadas y los resultados obtenidos.',
      },
      {
        img: require('@/assets/curso/tema5-1-infog2_1.svg'),
        img_h: require('@/assets/curso/tema5-1-infog2_2.svg'),
        pos_x: '58.7%',
        pos_y: '7.1%',
        titulo: 'Política ambiental',
        texto:
          'Se definen todos los principios ambientales básicos que guían las actividades de una organización.',
      },
      {
        img: require('@/assets/curso/tema5-1-infog3_1.svg'),
        img_h: require('@/assets/curso/tema5-1-infog3_2.svg'),
        pos_x: '57%',
        pos_y: '47.1%',
        titulo: 'Manual de gestión ambiental',
        texto:
          'Reglas, estándares, lineamientos y recomendaciones que conducen a una buena gestión ambiental.',
      },
      {
        img: require('@/assets/curso/tema5-1-infog4_1.svg'),
        img_h: require('@/assets/curso/tema5-1-infog4_2.svg'),
        pos_x: '43.9%',
        pos_y: '68.1%',
        titulo: 'Procedimientos funcionales',
        texto:
          'Documentos que regula la forma de operar en todas las actividades relacionadas con la gestión ambiental.',
      },
      {
        img: require('@/assets/curso/tema5-1-infog5_1.svg'),
        img_h: require('@/assets/curso/tema5-1-infog5_2.svg'),
        pos_x: '30%',
        pos_y: '47.1%',
        titulo: 'Instrucciones técnicas',
        texto:
          'Explica de forma clara y concisa todos los pasos a seguir para iniciar, desarrollar y finalizar una o más actividades.',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.btns
  position: relative
  &__item
    position: absolute
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    cursor: pointer
    transition: background-image 0.2s ease-in-out
  &__text
    position: absolute
    background-color: #FFF
    width: 300px
    font-weight: bold
    text-align: center
    z-index: 100
    line-height: 1.2em
    border: 4px solid #FFBB00
    transform: translate(-50%)
    p
      line-height: 1.2em
@media (max-width: $bp-max-md)
  .btns__text
    width: 200px
</style>
