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

    Separador


    // 1.1
    #t_1_1.titulo-segundo(data-aos="fade-right")
      .h2 1.1 Normas

    p(data-aos="fade") Colombia cuenta con una gran variedad de normas ambientales, las cuales se describen a continuación:

    .row.tarjeta.tarjeta--gris(data-aos="fade-down")
      BotonesB    

    Separador


    // 1.2
    #t_1_2.titulo-segundo(data-aos="fade-right")
      .h2 1.2  Tratados internacionales firmados por Colombia

    p(data-aos="fade") Los tratados son acuerdos entre varios países que buscan combatir los principales conflictos que hay en temas ambientales. A continuación, se describen los principales tratados internacionales firmados por Colombia:

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .row
          .col-md-6
            .nav-holder
              img(src="@/assets/curso/tema1-2-hover1.jpg", alt="Convención para el Cambio Climático")
              .text
                p.text-center.mb-3.h4 
                  strong Convención para el Cambio Climático
                p.text-center Busca desarrollar temas concernientes a la educación, formación, sensibilización y cumplimiento de los compromisos adquiridos por los países.
          .col-md-6
            .nav-holder(@mouseover="mostrarIndicador = false")
              .indicador--click(v-if="mostrarIndicador")
              img(src="@/assets/curso/tema1-2-hover2.jpg", alt="Convención para la Protección de la Biodiversidad")
              .text
                p.text-center.mb-3.h4 
                  strong Convención para la Protección de la Biodiversidad
                p.text-center Se estableció en la conferencia de Río de Janeiro en el año 1991 y tiene como objetivo principal la protección de la biodiversidad.
          .col-md-6
            .nav-holder
              img(src="@/assets/curso/tema1-2-hover3.jpg", alt="Convención de Basilea sobre Residuos Peligrosos (1989)")
              .text
                p.text-center.mb-3.h4 
                  strong Convención de Basilea sobre Residuos Peligrosos (1989)	
                p.text-center Reducir el volumen de residuos para proteger la salud humana y del medio ambiente. Colombia la ratificó mediante la Ley 256 de 1996.
          .col-md-6
            .nav-holder(@mouseover="mostrarIndicador = false")
              .indicador--click(v-if="mostrarIndicador")
              img(src="@/assets/curso/tema1-2-hover4.jpg", alt="Convenio de Viena para la Protección de la Capa de Ozono y el Protocolo de Montreal	")
              .text
                p.text-center.mb-3.h4 
                  strong Convenio de Viena para la Protección de la Capa de Ozono y el Protocolo de Montreal
                p.text-center Se creó para la protección de la capa de ozono es un acuerdo medioambiental multilateral y fue ratificado por Colombia mediante la Ley de 1990.



    Separador


    // 1.3
    #t_1_3.titulo-segundo(data-aos="fade-right")
      .h2 1.3  Leyes generales en Colombia

    p.mb-4(data-aos="fade") En materia de leyes, Colombia tiene reglamentaciones que aportan a los principales temas ambientales y que posibilitan trabajar en su protección, a saber: 

    .row.justify-content-center.tarjeta.tarjeta-verde4.py-5
      .col-lg-11
        h3.text-center Leyes generales en Colombia
        LineaTiempoC.color-secundario(:datos="datosLineaTiempoC")

    Separador


    // 1.4
    #t_1_4.titulo-segundo(data-aos="fade-right")
      .h2 1.4  Normas de gestión ambiental

    p.mb-4(data-aos="fade") Estas normas se reglamentan por medio de la Ley 99 de 1993 que exige la planificación de la gestión ambiental de proyectos en Colombia.

    .row.justify-content-center.mb-5
      .col-lg-10
        LineaTiempoD.color-primario(data-aos="fade-down")
          .row.justify-content-center.px-md-5(numero="" titulo="Ley 23 de 1973")
            .col-md-9
              p Donde se conceden facultades extraordinarias al Presidente de la República para expedir el Código de Recursos Naturales y de Protección al Medio Ambiente y se dictan otras disposiciones.
            .col-md-1
            .col-md-2.col-4
              figure.px-md-4
                img(src='@/assets/curso/tema1-4-linea1.svg', alt='Texto que describa la imagen')
          .row.justify-content-center.px-md-5(numero="" titulo="Resolución 1023 de 2005")
            .col-md-9
              p Se adoptan guías ambientales como instrumento de autogestión y autorregulación.
            .col-md-1
            .col-md-2.col-4
              figure.px-md-4
                img(src='@/assets/curso/tema1-4-linea2.svg', alt='Resolución 1023 de 2005')   
          .row.justify-content-center.px-md-5(numero="" titulo="Ley 1333 de 2009")
            .col-md-9
              p Procedimiento sancionatorio ambiental y se dictan otras disposiciones.
            .col-md-1
            .col-md-2.col-4
              figure.px-md-4
                img(src='@/assets/curso/tema1-4-linea3.svg', alt='Ley 1333 de 2009') 
          .row.justify-content-center.px-md-5(numero="" titulo="Resolución 2064 de 2010")
            .col-md-9
              p Se reglamentan las medidas posteriores a la aprehensión preventiva, restitución o decomiso de especímenes de especies silvestres de fauna y flora terrestre y acuática y se dictan otras disposiciones.
            .col-md-1
            .col-md-2.col-4
              figure.px-md-3
                img(src='@/assets/curso/tema1-4-linea4.svg', alt='Resolución 2064 de 2010') 
          .row.justify-content-center.px-md-5(numero="" titulo="Decreto 2820 de 2010")
            .col-md-9
              p Se reglamenta el Título VIII de la Ley 99 de 1993 sobre licencias ambientales.
            .col-md-1
            .col-md-2.col-4
              figure.px-md-4
                img(src='@/assets/curso/tema1-4-linea5.svg', alt='Decreto 2820 de 2010') 
          .row.justify-content-center.px-md-5(numero="" titulo="Resolución 260 de 2011")
            .col-md-9
              p Se fijan las tarifas para el cobro de los servicios de evaluación y seguimiento de licencias, permisos, autorizaciones y demás instrumentos de control y manejo ambiental.
            .col-md-1
            .col-md-2.col-4
              figure.px-md-3
                img(src='@/assets/curso/tema1-4-linea6.svg', alt='Resolución 260 de 2011') 
          .row.justify-content-center.px-md-5(numero="" titulo="Resolución 689 de 2016")
            .col-md-9
              p Reglamento técnico que establece los límites máximos de fósforo y la biodegradabilidad de los tensoactivos en jabones.
            .col-md-1
            .col-md-2.col-4
              figure.px-md-4
                img(src='@/assets/curso/tema1-4-linea7.svg', alt='Resolución 689 de 2016') 
          .row.justify-content-center.px-md-5(numero="" titulo="Ley 1844 de 2017")
            .col-md-9
              p Se aprueba el Acuerdo de París que se basa en ratificación y oportunidad de planear acciones de adaptación y mitigación frente al cambio climático.
            .col-md-1
            .col-md-2.col-4
              figure.px-md-4
                img(src='@/assets/curso/tema1-4-linea8.svg', alt='Ley 1844 de 2017')
          .row.justify-content-center.px-md-5(numero="" titulo="Decreto 870 de 2017")
            .col-md-9
              p Se establece el pago por servicios ambientales y otros incentivos de la conservación.
            .col-md-1
            .col-md-2.col-4
              figure.px-md-4
                img(src='@/assets/curso/tema1-4-linea9.svg', alt='Decreto 870 de 2017') 
          .row.justify-content-center.px-md-5(numero="" titulo="Resolución 2210 de 2018")
            .col-md-9
              p Se reglamenta el uso del sello minero ambiental.
            .col-md-1
            .col-md-2.col-4
              figure.px-md-4
                img(src='@/assets/curso/tema1-4-linea10.svg', alt='Resolución 2210 de 2018	') 
          .row.justify-content-center.px-md-5(numero="" titulo="Resolución 1447 de 2018")
            .col-md-9
              p Se reglamenta el sistema de monitoreo, reporte y evaluación de las acciones de mitigación a nivel nacional.
            .col-md-1
            .col-md-2.col-4
              figure.px-md-4
                img(src='@/assets/curso/tema1-4-linea11.svg', alt='Resolución 1447 de 2018') 
          .row.justify-content-center.px-md-5(numero="" titulo="Ley 1931 de 2018")
            .col-md-9
              p Se establecen directrices para la gestión del cambio climático.
            .col-md-1
            .col-md-2.col-4
              figure.px-md-4
                img(src='@/assets/curso/tema1-4-linea12.svg', alt='Ley 1931 de 2018') 
          .row.justify-content-center.px-md-5(numero="" titulo="Resolución 1561 de 2019")
            .col-md-9
              p Establece la referencia para la elaboración del Estudio de Impacto Ambiental - EIA.
            .col-md-1
            .col-md-2.col-4
              figure.px-md-4
                img(src='@/assets/curso/tema1-4-linea13.svg', alt='Resolución 1561 de 2019')                                               


    .row
      .col-lg-7.mb-4(data-aos="fade-right")
        p De acuerdo con lo anterior, se puede comprender que los impactos ambientales deben examinarse a la luz de la normatividad ambiental que busca proteger, precisamente, el ambiente evitando la contaminación, preservando tanto la biodiversidad como los recursos naturales y evitar cualquier acción que lo afecte de una manera negativa.
        .cajon.color-primario.p-4.mb-3
          p.mb-0 La Evaluación del Impacto Ambiental (EIA) se basa en un estudio que permite identificar, valorar y cuantificar los posibles efectos ambientales que pueden tener los proyectos en el caso de ser ejecutados permitiendo tomar las decisiones adecuadas para prevenirlos y minimizarlos.
        p La industria es uno de los responsables de la contaminación y la afectación de ecosistemas. Por esto, la actividad e impacto de dichas empresas está controlada y supervisada por los entes ambientales de los gobiernos.
      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/tema1-4-img1.png', alt='Imagen decorativa')

</template>

<script>
import BotonesB from '../components/BotonesB.vue'
import LineaTiempoC from '../components/LineaTiempoC'
export default {
  name: 'Tema1',
  components: {
    BotonesB,
    LineaTiempoC,
  },
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    datosLineaTiempoC: [
      {
        icono: require('@/assets/curso/tema1-3-linea1.svg'),
        titulo: 'Ley 99 de 1993',
        texto:
          'Por la cual se crea el Ministerio del Medio Ambiente, se reordena el sector público encargado de la gestión y conservación del medio ambiente y los recursos naturales renovables, se organiza el Sistema Nacional Ambiental, SINA, y se dictan otras disposiciones.',
      },
      {
        icono: require('@/assets/curso/tema1-3-linea2.svg'),
        titulo: 'Ley 23 de 1973',
        texto:
          'Principios fundamentales sobre prevención y control de la contaminación del aire, agua y suelo y otorgó facultades al Presidente de la República para expedir el Código de los Recursos Naturales.',
      },
      {
        icono: require('@/assets/curso/tema1-3-linea3.svg'),
        titulo: 'Ley 388 de 1997',
        texto:
          'Ordenamiento Territorial Municipal y Distrital y Planes de Ordenamiento Territorial.',
      },
      {
        icono: require('@/assets/curso/tema1-3-linea4.svg'),
        titulo: 'Ley 491 de 1999',
        texto:
          'Define el seguro ecológico y delitos contra los recursos naturales y el ambiente y se modifica el Código Penal.',
      },
      {
        icono: require('@/assets/curso/tema1-3-linea5.svg'),
        titulo: 'Ley 29 de 1992',
        texto:
          'Por medio de la cual se aprueba el “Protocolo de Montreal relativo a las sustancias agotadoras de la capa de ozono”, suscrito en Montreal el 16 de septiembre de 1987, con sus enmiendas adoptadas en Londres el 29 de junio de 1990 y en Nairobi el 21 de junio de 1991.',
      },
    ],
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
