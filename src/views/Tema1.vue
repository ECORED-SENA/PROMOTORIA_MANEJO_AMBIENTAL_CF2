<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Normativa ambiental

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema1.png", alt="Normativa ambiental")  

    p.mb-4(data-aos="fade") La normativa ambiental establece las obligaciones para la conservación de los recursos naturales y culturales. Allí se relacionan las normas, tratados y leyes que funcionan para regular las acciones de la humanidad sobre los componentes biofísicos, para reducir los impactos ambientales. Precisamente, para considerar las diferentes acciones a seguir en la normativa ambiental, se deben tener en cuenta las normas, tratados, leyes y normas de gestión ambiental. 

    .row.tarjeta.tarjeta--gris
      BotonesB      

    Separador


    // 1.1
    #t_1_1.titulo-segundo(data-aos="fade-right")
      .h2 1.1 Normas

    p(data-aos="fade") Colombia cuenta con una gran variedad de normas ambientales, las cuales se describen a continuación:






    Separador


    // 1.2
    #t_1_2.titulo-segundo(data-aos="fade-right")
      .h2 1.2  Tratados internacionales firmados por Colombia

    p(data-aos="fade") Los tratados son acuerdos entre varios países que buscan combatir los principales conflictos que hay en temas ambientales. A continuación, se describen los principales tratados internacionales firmados por Colombia:







    Separador


    // 1.3
    #t_1_3.titulo-segundo(data-aos="fade-right")
      .h2 1.3  Leyes generales en Colombia

    p(data-aos="fade") En materia de leyes, Colombia tiene reglamentaciones que aportan a los principales temas ambientales y que posibilitan trabajar en su protección, a saber: 






     Separador


    // 1.4
    #t_1_4.titulo-segundo(data-aos="fade-right")
      .h2 1.4  Normas de gestión ambiental

    p(data-aos="fade") Estas normas se reglamentan por medio de la Ley 99 de 1993 que exige la planificación de la gestión ambiental de proyectos en Colombia.

</template>

<script>
import BotonesB from '../components/BotonesB.vue'
export default {
  name: 'Tema1',
  components: {
    BotonesB,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
