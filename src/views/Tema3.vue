<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Trámites ambientales

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema3.png", alt="Trámites ambientales")  

    p.mb-4(data-aos="fade") Los trámites ambientales se utilizan para planificar y gestionar proyectos para garantizar que las actividades humanas y económicas se adapten a las limitaciones ecológicas y de recursos y se conviertan en un mecanismo clave para promover el desarrollo sostenible.

    AcordeonB.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta-verde")(data-aos="fade-down")  
      .row.justify-content-center.px-lg-5(titulo="Licencias ambientales")
        p En Colombia las licencias ambientales son otorgadas por las autoridades ambientales como las Corporaciones Autónomas Regionales CAR, ministerio de ambiente, municipios y distritos. Para que una autoridad ambiental otorgue una licencia se deben cumplir los siguientes requisitos: 
        ul.lista-ul--color.lista-circulo.lista-azul
          li.mb-1
            i.fas.fa-circle
            p.mb-0 Tener el Estudio de Impacto Ambiental - EIA.
          li.mb-1
            i.fas.fa-circle
            p.mb-0 Formulario único de licencias ambientales que contenga nombre o razón social, costo, descripción de este, entre otros.
          li.mb-1
            i.fas.fa-circle
            p.mb-0 Planos que soportan el EIA, es decir el modelo de almacenamiento geográfico o el Geodatabase.
      .row.justify-content-center.px-lg-5(titulo="Proceso para otorgar una licencia ambiental")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Sacar un certificado de intersección y se presentan los términos de referencia, es decir la línea base del proyecto.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Socializar el proyecto con las comunidades.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Realizar el estudio ambiental con alguna de las firmas consultoras y se presenta el borrador.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Presenta el estudio definitivo al ministerio del medio ambiente y protección  social que realiza la revisión.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Presentar las pólizas de la obtención del Plan de Manejo ambiental - PMA y se paga la tasa del 1x1000 del costo del proyecto 
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Emitir el permiso ambiental que es firmado por el Ministro de Ambiente. 
      .row.justify-content-center.px-lg-5(titulo="Tipos de licencias ambientales")
        ul.lista-ul--color.lista-circulo.lista-azul
          li.mb-3
            i.fas.fa-circle
            p.mb-0
              strong Licencia ambiental ordinaria
              br
              | Se otorga al peticionario en donde se establecen los requisitos, condiciones y obligaciones que el peticionario debe cumplir.
          li.mb-3
            i.fas.fa-circle
            p.mb-0
              strong Licencia ambiental única
              br
              | Es otorgada por la autoridad ambiental competente e incluye los permisos autorizaciones o concesiones para el desarrollo del proyecto.
          li.mb-1
            i.fas.fa-circle
            p.mb-0
              strong Licencia ambiental global
              br
              | Es de competencia exclusiva del Ministerio del Medio Ambiente una protección social donde se autorizan todas las obras relacionadas con la explotación de campos petroleros y de gas.   
      .row.justify-content-center.px-lg-5(titulo="Cobro para expedición de licencias")
        p Las licencias ambientales se otorgan para toda la vida útil del proyecto u obra y cubren todas las fases. Las autoridades ambientales cobrarán los servicios de evaluación de seguimientos de licencias ambientales. pero existen unos topes máximos de cobro: 
        .row.justify-content-center
          .col-lg-5
            h4.mb-2.p-2.text-white.text-center.back-primario Valor del proyecto
            p.mb-2.p-2.text-center.back-verde-suave 684.592
            p.mb-2.p-2.text-center.back-verde-suave 684.592 y 2,7 M
            p.mb-2.p-2.text-center.back-verde-suave Mayor a 2,7 M
          .col-lg-5
            h4.mb-2.p-2.text-white.text-center.back-primario Cobro
            p.mb-2.p-2.text-center.back-verde-suave 0,6% del costo total del proyecto.
            p.mb-2.p-2.text-center.back-verde-suave 0,5% del costo total del proyecto.
            p.mb-2.p-2.text-center.back-verde-suave 0,4% el costo total del proyecto.
      .row.justify-content-center.px-lg-5(titulo="Términos de referencia")
        p La autoridad ambiental establece los términos de referencia para la elaboración y ejecución de los Estudios de Impacto Ambiental (EIA) y Diagnóstico Ambiental de Alternativas (DAA) que serán presentados ante la autoridad ambiental competente al momento de solicitar el otorgamiento de una licencia ambiental. La Autoridad Nacional de Licencias Ambientales -  ANLA establece los diferentes términos de referencia según los siguientes sectores y se pueden encontrar en la página web. 
        .row
          .col-lg-6
            ul.lista-ul--color.lista-circulo.lista-azul
              li.mb-0
                i.fas.fa-circle
                | Plaguicidas.
              li.mb-0
                i.fas.fa-circle
                | Distritos de riego.
              li.mb-0
                i.fas.fa-circle
                | Flora.
              li.mb-0
                i.fas.fa-circle
                | Fauna.
              li.mb-0
                i.fas.fa-circle
                | Términos de referencia sector energía, represas, trasvases y embalses hidroeléctricas.
              li.mb-0
                i.fas.fa-circle
                | Eólica.
              li.mb-0
                i.fas.fa-circle
                | Solar.
              li.mb-0
                i.fas.fa-circle
                | Líneas.
              li.mb-0
                i.fas.fa-circle
                | Termoeléctricas.
              li.mb-0
                i.fas.fa-circle
                | Presas, represas o embalses.
              li.mb-0
                i.fas.fa-circle
                | Trasvase de cuenca.                     
          .col-lg-6
            ul.lista-ul--color.lista-circulo.lista-azul
              li.mb-0
                i.fas.fa-circle
                | Sector infraestructura.
              li.mb-0
                i.fas.fa-circle
                | Vías.
              li.mb-0
                i.fas.fa-circle
                | Puertos.
              li.mb-0
                i.fas.fa-circle
                | Nuevas fuentes de materiales en proyectos de infraestructura de transporte.
              li.mb-0
                i.fas.fa-circle
                | Obras marítimas duras de control y protección costera, y de regeneración de duna y playas.
              li.mb-0
                i.fas.fa-circle
                | Tratamiento de aguas residuales.
              li.mb-0
                i.fas.fa-circle
                | Rellenos sanitarios.
              li.mb-0
                i.fas.fa-circle
                | Sector minero.
              li.mb-0
                i.fas.fa-circle
                | Sector hidrocarburos.
              li.mb-0
                i.fas.fa-circle
                | Rellenos sanitarios.
      .row.justify-content-center.px-lg-5(titulo="Concesiones")
        p Los contratos de concesión buscan la prestación, operación, explotación, organización o gestión de un servicio público, construcción, explotación o conservación de una obra o bien destinado a uso público, así como las actividades necesarias para su funcionamiento. Y se clasifican de acuerdo con las siguientes clases:
        ul.lista-ul--color.lista-circulo.lista-azul
          li.mb-3
            i.fas.fa-circle
            p.mb-0
              strong Concesiones de obra pública
              br
              | Se define a una persona para construcción de una obra pública y le otorga el permiso para cobrar determinadas sumas de dinero a quienes la utilicen como medio de financiar el costo de aquella.
          li.mb-3
            i.fas.fa-circle
            p.mb-0
              strong Concesión para la prestación de servicios públicos
              br
              | Fue eliminado por la Constitución de 1991 para la eliminación del monopolio estatal de la prestación de servicios públicos. 
          li.mb-3
            i.fas.fa-circle
            p.mb-0
              strong Concesión y explotación de bienes estatales
              br
              | El Estado le entrega al concesionario un bien de propiedad estatal para que él por su cuenta lo explote y lo use para el beneficio de la comunidad.
      .row.justify-content-center.px-lg-5(titulo="Tipos de concesiones")
        ul.lista-ul--color.lista-circulo.lista-azul
          li.mb-3
            i.fas.fa-circle
            p.mb-0
              strong Ley 685 de 2001
              br
              | Se establece las concesiones de aguas y estas se reglamentas desde los artículos 6°, 28, 36, 41, 38, y 46.
          li.mb-3
            i.fas.fa-circle
            p.mb-0
              strong Decreto 1541 de 1978
              br
              | Se establece concesiones mineras, las cuales se reglamentan de manera explícita en los artículos 5 y 14. 

    p(data-aos="fade") Los trámites ambientales son empleados al momento de realizar la planificación y desarrollo de un proyecto que asegura que las actividades humanas se ajusten a las restricciones ecológicas, y de esta manera se construya un mecanismo para el desarrollo sostenible en la organización.



</template>

<script>
import AcordeonB from '../components/AcordeonB'
export default {
  name: 'Tema3',
  components: {
    AcordeonB,
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
