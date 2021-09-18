<template lang="pug">
.btns
  img(src='@/assets/curso/tema1-1-linea.svg', alt='Normativa ambiental')
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
  name: 'BotonesB',
  data: () => ({
    indicador: true,
    hover: null,
    size: '17%',
    botones: [
      {
        img: require('@/assets/curso/tema1-boton1_1.svg'),
        img_h: require('@/assets/curso/tema1-boton1_2.svg'),
        pos_x: '7.5%',
        pos_y: '7.1%',
        titulo: 'Constitución Nacional',
        texto:
          'Determina el derecho a un ambiente sano, el medio ambiente como patrimonio común y el desarrollo sostenible.',
      },
      {
        img: require('@/assets/curso/tema1-boton2_1.svg'),
        img_h: require('@/assets/curso/tema1-boton2_2.svg'),
        pos_x: '24.7%',
        pos_y: '7.1%',
        titulo:
          'Código Nacional de los Recursos Naturales Renovables y de Protección del Medio Ambiente - Decreto Ley 2811 de 1974',
        texto:
          'Establece el uso y desuso de los recursos naturales renovables.',
      },
      {
        img: require('@/assets/curso/tema1-boton3_1.svg'),
        img_h: require('@/assets/curso/tema1-boton3_2.svg'),
        pos_x: '41.8%',
        pos_y: '7.1%',
        titulo: 'Ley Sanitaria - Ley 09 de 1979',
        texto:
          'Su principal objetivo es la conservación de la salud y del bienestar humano.',
      },
      {
        img: require('@/assets/curso/tema1-boton4_1.svg'),
        img_h: require('@/assets/curso/tema1-boton4_2.svg'),
        pos_x: '58.9%',
        pos_y: '7.1%',
        titulo: 'Ley 99 de 1993',
        texto:
          'Se crea el Ministerio de Medio Ambiente y administración de los recursos naturales regionales.',
      },
      {
        img: require('@/assets/curso/tema1-boton5_1.svg'),
        img_h: require('@/assets/curso/tema1-boton5_2.svg'),
        pos_x: '76%',
        pos_y: '7.1%',
        titulo: 'Código Minero - Ley 685 del 2001',
        texto: 'Se expide el Código de Minas y se dictan otras disposiciones.',
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
    border-radius: 20px
    position: absolute
    top: 110%
    left: 50%
    background-color: #FFF
    width: 300px
    font-weight: bold
    text-align: center
    z-index: 100
    line-height: 1.2em
    border: 4px solid #29B39D
    border-radius: 20px
    transform: translate(-50%)
    p
      line-height: 1.2em
@media (max-width: $bp-max-md)
  .btns__text
    width: 220px
  .btns__item:nth-child(1n) .btns__text
    left: 140%
  .btns__item:nth-last-child(2n) .btns__text
    left: 40%
  .btns__item:nth-last-child(3n) .btns__text
    left: 35%
  .btns__item:last-child .btns__text
    left: -40%
</style>
