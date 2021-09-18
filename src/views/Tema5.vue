<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Documentación para tramitar un Sistema de Gestión Ambiental

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema5.png", alt="Documentación para tramitar un Sistema de Gestión Ambiental")  

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .bloque-texto-a.color-secundario-gris.p-4
          .row.m-0.align-items-center.justify-content-between.p-1
            .col-lg-7.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-5
                p Para gestionar la información y ahora que se ha relacionado la información correspondiente a la norma ISO 14001, es importante centrarse en los documentos que son requeridos para tramitar un Sistema de Gestión Ambiental (SGA) según esta norma. El SGA debe documentar y definir todos los procesos para alcanzar los objetivos ambientales y para ello, se debe conocer sus características, las cuales se centran en: 
            .col-lg-5
              ul.lista-ul--color.lista-circulo
                li.mb-1
                  i.fas.fa-circle
                  p.mb-0
                    strong Legibles.
                li.mb-1
                  i.fas.fa-circle
                  p.mb-0
                    strong Con fecha.
                li.mb-1
                  i.fas.fa-circle
                  p.mb-0
                    strong Comprensibles.
                li.mb-1
                  i.fas.fa-circle
                  p.mb-0
                    strong En buen estado.
                li.mb-1
                  i.fas.fa-circle
                  p.mb-0
                    strong Archivados.
                li.mb-1
                  i.fas.fa-circle
                  p.mb-0
                    strong Localizados.
                li.mb-1
                  i.fas.fa-circle
                  p.mb-0
                    strong Revisados frecuentemente en un tiempo estipulado.
                li.mb-0
                  i.fas.fa-circle
                  p.mb-0
                    strong Actualizados.                            

    Separador

    // 5.1
    #t_5_1.titulo-segundo(data-aos="fade-right")
      .h2 5.1  Clasificación

    p.mb-4(data-aos="fade") La gestión documental es una labor fundamental en el proceso de documentación, para que esta sea efectiva, se debe reconocer sus clasificaciones: 

    BotonesA.mb-4

    p.mb-4(data-aos="fade") Al interior de su clasificación, se debe considerar la política ambiental que debe cumplir con lo siguiente:

    h3.text-center.text-white.bg-primario.py-1.pb-1.mb-1 Las políticas ambientales
    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Características")
        .row.px-md-5
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema5-1-tabs1.jpg', alt='Características')
          .col-md-6
            h4 Características:
            ul.lista-ul--color.lista-circulo.lista-verde
              li.mb-0
                i.fas.fa-circle
                | Se adaptan según el grado de impacto ambiental que genera la organización.
              li.mb-0
                i.fas.fa-circle
                | Reflejan los esfuerzos de mejora continua y control de la contaminación.
              li.mb-0
                i.fas.fa-circle
                | Tienen el compromiso de cumplir con las leyes y regulaciones ambientales aplicables.
              li.mb-0
                i.fas.fa-circle
                | Establecen las metas y objetivos ambientales.
              li.mb-0
                i.fas.fa-circle
                | Se documentan, implementan y comparten con todos los empleados de la organización.
              li.mb-0
                i.fas.fa-circle
                | Están abiertas al público y accesibles a todas las partes interesadas.      
      .py-3.py-md-4(titulo="Manual de gestión ambiental")
        .row.px-md-5
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema5-1-tabs2.jpg', alt='Manual de gestión ambiental')
          .col-md-6
            h4 Manual de gestión ambiental:
            ul.lista-ul--color.lista-circulo.lista-verde
              li.mb-0
                i.fas.fa-circle
                | Declaración que representa la política ambiental.
              li.mb-0
                i.fas.fa-circle
                | Actividades funcionales y actividades relacionadas con el medio ambiente.
              li.mb-0
                i.fas.fa-circle
                | Declaración de conformidad relativa a la información generada por el entorno de la organización y las acciones correctoras a tener en cuenta.
      .py-3.py-md-4(titulo="Procedimiento")
        .row.px-md-5
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema5-1-tabs3.jpg', alt='Procedimiento')
          .col-md-6
            h4 Procedimiento:
            ul.lista-ul--color.lista-circulo.lista-verde
              li.mb-0
                i.fas.fa-circle
                | Propósito de la operación.
              li.mb-0
                i.fas.fa-circle
                | Alcance.
              li.mb-0
                i.fas.fa-circle
                | Qué se debe hacer.
              li.mb-0
                i.fas.fa-circle
                | Quién, cuándo, dónde y cómo hacerlo.
              li.mb-0
                i.fas.fa-circle
                | Materiales a utilizar.
              li.mb-0
                i.fas.fa-circle
                | Control y registro.      
      .py-3.py-md-4(titulo="Consideraciones técnicas")
        .row.px-md-5
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema5-1-tabs4.jpg', alt='Consideraciones técnicas')
          .col-md-6
            h4 Consideraciones técnicas:
            ul.lista-ul--color.lista-circulo.lista-verde
              li.mb-0
                i.fas.fa-circle
                | Alcance.
              li.mb-0
                i.fas.fa-circle
                | Limitaciones.
              li.mb-0
                i.fas.fa-circle
                | Personal que participa.
              li.mb-0
                i.fas.fa-circle
                | Responsables de resultados.                         


    p.mb-4(data-aos="fade") Los objetivos que se persigue en la gestión documental deben establecer los controles necesarios para asegurar que los aspectos ambientales sean debidamente atendidos, que reduzcan los impactos asociados y establecer los potenciales impactos ambientales tanto en los procesos de servicio como en los de producción.  


</template>

<script>
import BotonesA from '../components/BotonesA.vue'
export default {
  name: 'Tema5',
  components: {
    BotonesA,
  },
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
