<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Guías técnicas ambientales

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema4.png", alt="Trámites ambientales")  

    p.mb-4(data-aos="fade") Son documentos técnicos, conceptuales, metodológicos y procedimentales destinados a apoyar la gestión, tratamiento y ejecución ambiental de proyectos, estructuras o actividades. En el país existen las guías técnicas colombianas que se encargan de regular la gestión del riesgo ambiental. A continuación, se relacionan algunas de ellas: 

    .row.justify-content-center
      .col-md-3.mb-3
        .tarjeta-container
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema4-hover1.svg", alt="GTC 104")
            .tarjetaTxt
              h4 GTC 104
              p.mb-0 Guía para la gestión del riesgo ambiental, principios y procesos.
      .col-md-3.mb-3        
        .tarjeta-container(@mouseover="mostrarIndicador = false", onclick="")
          .indicador--click(v-if="mostrarIndicador")
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema4-hover2.svg", alt="GTC 24")
            .tarjetaTxt
              h4 GTC 24
              p.mb-0 Guía para la gestión ambiental, los residuos sólidos y la guía para la separación en la fuente.      
      .col-md-3.mb-3        
        .tarjeta-container
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema4-hover3.svg", alt="GTC 250")
            .tarjetaTxt
              h4 GTC 250
              p.mb-0.px-md-2 Guía de buenas prácticas sociales para la exploración y la explotación de hidrocarburos.
    .row.justify-content-center
      .col-md-3.mb-3
        .tarjeta-container
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema4-hover4.svg", alt="GTC 93")
            .tarjetaTxt
              h4 GTC 93	
              p.mb-0 Guía para la ejecución de la revisión ambiental inicial (RAI) y del análisis de diferencias (GAP Analysis), como parte de la implementación y mejora de un sistema de gestión ambiental.
      .col-md-3.mb-3        
        .tarjeta-container
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema4-hover5.svg", alt="GTC 45")
            .tarjetaTxt
              h4 GTC 45
              p.mb-0 Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional.

    Separador

    // 4.1
    #t_4_1.titulo-segundo(data-aos="fade-right")
      .h2 4.1  Revisión Ambiental Inicial - RAI (GTC 93)

    .row
      .col-lg-7.mb-4(data-aos="fade-right")
        p Hace referencia a la Guía Técnica Colombia 93, la cual presenta directrices para la ejecución de una Revisión Ambiental Inicial (RAI) y de un análisis de diferencias, esta guía se puede aplicar en organizaciones de cualquier tipo, tamaño, y localización geográfica que busquen implementar o mejorar su sistema de gestión ambiental (Icontec, 2007, GTC 93).
        .tarjeta-verde2.p-3.p-md-4
          p Un posible enfoque para la identificación de RAI puede considerar las siguientes etapas:
          ul.lista-ul--color.lista-circulo.lista-azul.mb-0
            li.mb-0
              i.fas.fa-circle
              p.mb-0 Planificación.
            li.mb-0
              i.fas.fa-circle
              p.mb-0 Toma de datos.  
            li.mb-0
              i.fas.fa-circle
              p.mb-0 Procesamiento de los datos.
            li.mb-0
              i.fas.fa-circle
              p.mb-0 Análisis e informe de los resultados.    
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4-1-img1.jpg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade") Además de la RAI, existen diferentes guías ambientales que sirven como instrumento de autogestión y autorregulación. En el  artículo 3° de la Resolución 1023 se adoptan las siguientes guías ambientales, reguladas por el Ministerio de Ambiente, Vivienda y Desarrollo Territorial, y que se relacionan a continuación: 

    h4.mb-4(data-aos="fade-right") Guías ambientales por tipo de sector

    SlyderE.tarjeta-verde3.p-lg-5(indicadores="derecha")
      .row
        .col-md-6.mb-4.mb-md-0
          h4.mb-4 Sector hidrocarburos
          ol.lista-ol--cuadro.lista-azul
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Guía de manejo ambiental para proyectos de perforación de pozos de petróleo y gas. 
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Guía básica ambiental para programas de exploración sísmica terrestre. 
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Guía ambiental para desarrollo de campos. 
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Guía ambiental para transporte por ductos. 
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Guía ambiental para estaciones de almacenamiento y bombeo. 
            li 
              .lista-ol--cuadro__vineta
                span 6
              | Guía de manejo ambiental para estaciones de servicio de combustible. 
            li 
              .lista-ol--cuadro__vineta
                span 7
              | Guía de manejo ambiental para estaciones de servicio ampliadas a GNV. 
            li 
              .lista-ol--cuadro__vineta
                span 8
              | Guía ambiental para la distribución de gas natural.       
        .col-md-6
          figure
            img(src='@/assets/curso/tema4-1-slider1.jpg', alt='Sector hidrocarburos')
      .row
        .col-md-6.mb-4.mb-md-0
          h4.mb-4 Sector energético 
          ol.lista-ol--cuadro.lista-azul
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Guía ambiental para proyectos carboeléctricos. Guía de buenas prácticas en uso racional de la energía en el sector de la pequeña y mediana empresa.  
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Guía ambiental para proyectos de transmisión de energía eléctrica. 
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Guía ambiental para proyectos de distribución eléctrica. 
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Guía ambiental para termoeléctricas y procesos de cogeneración (parte aire y ruido).     
        .col-md-6
          figure
            img(src='@/assets/curso/tema4-1-slider2.jpg', alt='Sector energético')
      .row
        .col-md-6.mb-4.mb-md-0
          h4.mb-4 Sector agrícola y pecuario 
          ol.lista-ol--cuadro.lista-azul
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Guía ambiental para el subsector avícola. 
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Guía ambiental para el subsector porcícola. 
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Guía ambiental para el subsector camaroniculto.  
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Guía ambiental para el subsector floricultor.  
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Guía ambiental para el subsector de caña de azúcar. 
            li 
              .lista-ol--cuadro__vineta
                span 6
              | Guía ambiental para el subsector de palma de aceite.
            li 
              .lista-ol--cuadro__vineta
                span 7
              | Guía ambiental para el subsector bananero.
            li 
              .lista-ol--cuadro__vineta
                span 8
              | Guía ambiental para el subsector arrocero. 
            li 
              .lista-ol--cuadro__vineta
                span 9
              | Guía ambiental para el subsector cerealista.
            li 
              .lista-ol--cuadro__vineta
                span 10
              | Guía ambiental para el subsector del algodón.
            li 
              .lista-ol--cuadro__vineta
                span 11
              | Guía ambiental para el subsector cafetero.
            li 
              .lista-ol--cuadro__vineta
                span 12
              | Guía ambiental para el subsector hortifrutícola.
            li 
              .lista-ol--cuadro__vineta
                span 13
              | Guía ambiental para el cultivo de la papa.               
        .col-md-6
          figure
            img(src='@/assets/curso/tema4-1-slider3.jpg', alt='Sector agrícola y pecuario ')
      .row
        .col-md-6.mb-4.mb-md-0
          h4.mb-4 Sector industrial - manufacturero
          ol.lista-ol--cuadro.lista-azul
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Guías ambientales sector plásticos: principales procesos básicos de transformación de la industria plástica y manejo, aprovechamiento y disposición de residuos plásticos posconsumo. 
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Guía de buenas prácticas para el sector artes gráficas.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Guía de buenas prácticas para el sector alimentos. 
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Guía de buenas prácticas para el sector galvanotecnia. 
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Guía de buenas prácticas para el sector textil. 
            li 
              .lista-ol--cuadro__vineta
                span 6
              | Guía de buenas prácticas ambientales para el sector de recubrimientos electrolíticos en Colombia.  
            li 
              .lista-ol--cuadro__vineta
                span 7
              | Guía para plantas de beneficio del ganado.    
        .col-md-6
          figure
            img(src='@/assets/curso/tema4-1-slider4.jpg', alt='Sector industrial - manufacturero')
      .row
        .col-md-6.mb-4.mb-md-0
          h4.mb-4 Sector infraestructura y transporte
          ol.lista-ol--cuadro.lista-azul
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Guía ambiental para transporte de carbón.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Guía ambiental para la construcción de obras menores de infraestructura aeroportuaria. 
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Guía ambiental para la construcción y operación de ayudas de aeronavegación en tierra. 
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Guía ambiental para la construcción o ampliación de pistas, plataformas y calles de rodaje. 
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Guía ambiental para la operación y funcionamiento de aeropuertos. 
            li 
              .lista-ol--cuadro__vineta
                span 6
              | Guía de gestión ambiental subsector férreo.  
            li 
              .lista-ol--cuadro__vineta
                span 7
              | Guía ambiental para terminales portuarios. 
            li 
              .lista-ol--cuadro__vineta
                span 8
              | Guía ambiental para puertos carboníferos.       
            li 
              .lista-ol--cuadro__vineta
                span 9
              | Guía ambiental para evitar, corregir y compensar los impactos de las acciones de reducción y prevención de riesgos en el nivel municipal.  
        .col-md-6
          figure
            img(src='@/assets/curso/tema4-1-slider5.jpg', alt='Sector infraestructura y transporte')
      .row
        .col-md-6.mb-4.mb-md-0
          h4.mb-4 Sector agrícola y pecuario 
          ol.lista-ol--cuadro.lista-azul
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Guías ambientales para el subsector de plaguicidas: almacenamiento, transporte, aplicación aérea y terrestre y manejo de envases y residuos.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Guías para manejo seguro y gestión ambiental de sustancias químicas.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Guías ambientales de almacenamiento y transporte por carreteras de sustancias químicas peligrosas y residuos peligrosos.      
        .col-md-6
          figure
            img(src='@/assets/curso/tema4-1-slider6.jpg', alt='Sector agrícola y pecuario')



    Separador


    // 4.2
    #t_4_2.titulo-segundo(data-aos="fade-right")
      .h2 4.2  Requisitos

    .row
      .col-lg-7.mb-4(data-aos="fade-right")
        p En cuanto a permisos, concesiones o autorizaciones el interesado deberá tramitar y obtener los permisos autorizaciones o licencias requeridas para la ejecución del proyecto, obra u actividad. 
        p Por medio de las guías técnicas ambientales se permite que el desempeño de los proyectos, obras o actividades en una organización se realicen en función del desempeño ambiental de los proyectos y servirán como instrumento de consulta, referente técnico y orientación conceptual para el desarrollo de las actividades.
      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/tema4-2-img1.jpg', alt='Imagen decorativa')


</template>

<script>
export default {
  name: 'Tema4',
  components: {},
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
