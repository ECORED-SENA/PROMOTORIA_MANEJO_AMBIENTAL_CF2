export default {
  global: {
    componenteFormativo: 'Información y medio ambiente',
    descripcionCurso:
      'La tramitación de la información ambiental de una organización debe hacerse a la luz de la normativa, la cual facilitará la comprensión de términos de referencia que incluye un Sistema de Gestión Ambiental (SGA), así como los trámites ambientales, las guías técnicas que lo comprenden y la documentación requerida.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normativa ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Normas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tratados internacionales firmados por Colombia',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Leyes generales en Colombia',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Normas de gestión ambiental',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistema de Gestión Ambiental - SGA',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Normativa ISO',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estrategias',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Aplicación',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Trámites ambientales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Guías técnicas ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Revisión Ambiental Inicial - RAI (GTC 93)',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Requisitos',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Documentación para tramitar un Sistema de Gestión Ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Clasificación',
            hash: 't_5_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Congreso de Colombia. (1994). Ley 140 de 1994. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0140_1994.html ',
    },
    {
      referencia: 'Congreso de Colombia. (2011). Ley 1450 de 2011. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=43101 ',
    },

    {
      referencia: 'Congreso de Colombia. (2017). Ley 1844 de 2017. ',
      link: 'ww.secretariasenado.gov.co/senado/basedoc/ley_1844_2017.html ',
    },

    {
      referencia: 'Congreso de la República. (1993). Ley 99 de 1993. ',
      link:
        'https://www.minambiente.gov.co/images/normativa/app/leyes/6c-ley_0099_1993.pdf ',
    },
    {
      referencia: 'Congreso de la república. (2009). Ley 1333 de 2009. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36879 ',
    },
    {
      referencia: 'EAN. (2014). Principales normas ambientales. ',
      link:
        'https://repository.ean.edu.co/bitstream/handle/10882/1615/NormasAmbientales.pdf;js ',
    },
    {
      referencia: 'Icontec. (2007). Guía técnica colombiana GTC 104. ',
      link:
        'http://www.bogotaturismo.gov.co/sites/intranet.bogotaturismo.gov.co/files/GTC%20104%20DE%202009.pdf ',
    },
    {
      referencia: 'Icontec. (2007). Guía técnica colombiana GTC 24. ',
      link:
        'http://www.bogotaturismo.gov.co/sites/intranet.bogotaturismo.gov.co/files/GTC%2024%20DE%202009.pdf ',
    },
    {
      referencia: 'Icontec. (2007). Guía técnica colombiana GTC 250. ',
      link:
        'https://www.anh.gov.co/Seguridad-comunidades-y-medio-ambiente/Documents/GUIA%20TECNICA%20COLOMBIANA%20-%20FINAL.pdf ',
    },
    {
      referencia: 'Icontec. (2007). Guía técnica colombiana GTC 45. ',
      link:
        'https://idrd.gov.co/sitio/idrd/sites/default/files/imagenes/gtc450.pdf ',
    },
    {
      referencia: 'Icontec. (2007). Guía técnica colombiana GTC 93. ',
      link:
        'http://files.control-ambiental5.webnode.com.co/200000109-d6539d7adb/GTC93%20(1).pdf ',
    },
    {
      referencia: 'MinAmbiente. (1973). Ley 23 de 1973. ',
      link:
        'https://www.lexbase.co/lexdocs/indice/1973/l0023de1973#:~:text=%22%20LEY%2023%20de%201973%20 ',
    },
    {
      referencia: 'MinAmbiente. (2005). Resolución 1023 de 2005. ',
      link:
        'https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/sostenibilidad_sectores_productivos/res_1023_280705_adopcion_general.pdf ',
    },
    {
      referencia: 'MinAmbiente. (2005). Resolución 1023. ',
      link:
        'https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/sostenibilidad_sectores_productivos/res_1023_280705_adopcion_general.pdf ',
    },
    {
      referencia: 'MinAmbiente. (2010). Decreto 2820 de 2010. ',
      link:
        'https://www.minambiente.gov.co/images/normativa/decretos/2010/dec_2820_2010.pdf ',
    },
    {
      referencia: 'MinAmbiente. (2016). Resolución 689 de 2016. ',
      link:
        'https://www.minambiente.gov.co/images/normativa/app/resoluciones/9a-res%20689%20may%202016.pdf ',
    },
    {
      referencia: 'MinAmbiente. (2017). Decreto 870 de 2017. ',
      link:
        'http://es.presidencia.gov.co/normativa/normativa/DECRETO%20870%20DEL%2025%20DE%20MAYO%20DE%202017.pdf ',
    },
    {
      referencia:
        'MinAmbiente. (2017). Términos de referencia para la elaboración del diagnóstico ambiental de alternativas DAA. ',
      link:
        'https://www.anla.gov.co/documentos/normativa/terminos_referencia/tdr_nuevas_fuentes_de_materiales_0.pdf ',
    },
    {
      referencia: 'MinAmbiente. (2018). Ley 1931 de 2018. ',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/LEY%201931%20DEL%2027%20DE%20JULIO%20DE%202018.pdf ',
    },
    {
      referencia: 'MinAmbiente. (2018). Resolución 1447 de 2018. ',
      link:
        'https://www.minambiente.gov.co/images/normativa/app/resoluciones/98-RES%201447%20DE%202018.pdf ',
    },
    {
      referencia: 'MinAmbiente. (2018). Resolución 2210 de 2018. ',
      link:
        'https://www.minambiente.gov.co/images/normativa/app/resoluciones/0b-res%202210%20de%202018.pdf ',
    },
    {
      referencia: 'MinAmbiente. (2019). Resolución 1561 de 2019. ',
      link:
        'https://www.minambiente.gov.co/images/normativa/app/resoluciones/fe-res%201561%20de%202019.pdf ',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información. (2010). Resolución 415 de 2010. ',
      link:
        'https://www.redjurista.com/Documents/resolucion_415_de_2010_ministerio_de_tecnologias_de_la_informacion_y_las_comunicaciones.aspx#/ ',
    },
  ],
  glosario: [
    {
      termino: 'Normativa ambiental',
      significado:
        'establece las obligaciones para la conservación de los recursos naturales y culturales. ',
    },
    {
      termino: 'Sistemas de Gestión Ambiental',
      significado:
        'desarrolla procesos para disminuir los impactos ambientales negativos que se generan en la empresa u organización, además de incrementar la eficiencia en las operaciones. ',
    },
    {
      termino: 'ISO 14001',
      significado:
        'se dan lineamientos del Sistema de Gestión Ambiental y se ayuda a las organizaciones a controlar su impacto ambiental y logra un crecimiento sostenible.',
    },
    {
      termino: 'Licencias ambientales',
      significado:
        'autorización que otorga la autoridad ambiental competente para la ejecución de una obra o actividad, sujeta al cumplimiento por el beneficiario, estableciendo una línea clara frente a la prevención, mitigación, corrección, compensación y manejo de los efectos ambientales de la obra o actividad autorizada.',
    },
    {
      termino: 'Guías técnicas ambientales',
      significado:
        'son documentos técnicos, conceptuales, metodológicos y procedimentales destinados a apoyar la gestión, tratamiento y ejecución ambiental de proyectos, estructuras o actividades.',
    },
  ],
  complementario: [
    {
      texto: 'Congreso de la República. (1993). Ley 99 de 1993',
      tipo: 'Documento de sitio web',
      link:
        'https://www.minambiente.gov.co/images/normativa/app/leyes/6c-ley_0099_1993.pdf',
    },
    {
      texto:
        'Minambiente. (2017). Términos de referencia para la elaboración del Diagnóstico Ambiental de Alternativas DAA.',
      tipo: 'Documento de sitio web',
      link:
        'https://www.anla.gov.co/documentos/normativa/terminos_referencia/tdr_nuevas_fuentes_de_materiales_0.pdf',
    },
    {
      texto: 'Sabogal. C. (2012). Concesiones ambientales. ',
      tipo: 'Documento de sitio web',
      link: 'https://prezi.com/qjjpb-4iloxl/concesiones-ambientales/',
    },
    {
      texto: 'Icontec. (2007). Guía Técnica colombiana GTC 93. ',
      tipo: 'Documento de sitio web',
      link:
        'http://files.control-ambiental5.webnode.com.co/200000109-d6539d7adb/GTC93%20(1).pdf',
    },
    {
      texto: 'Icontec. (2007). Guía Técnica colombiana GTC 104. ',
      tipo: 'Documento de sitio web',
      link:
        'http://www.bogotaturismo.gov.co/sites/intranet.bogotaturismo.gov.co/files/GTC%20104%20DE%202009.pdf',
    },
    {
      texto: 'Icontec. (2007). Guía Técnica colombiana GTC 24. ',
      tipo: 'Documento de sitio web',
      link:
        'http://www.bogotaturismo.gov.co/sites/intranet.bogotaturismo.gov.co/files/GTC%2024%20DE%202009.pdf',
    },
    {
      texto: 'Icontec. (2007). Guía Técnica colombiana GTC 250. ',
      tipo: 'Documento de sitio web',
      link:
        'https://www.anh.gov.co/Seguridad-comunidades-y-medio-ambiente/Documents/GUIA%20TECNICA%20COLOMBIANA%20-%20FINAL.pdf',
    },
    {
      texto: 'Icontec. (2007). Guía Técnica colombiana GTC 93. ',
      tipo: 'Documento de sitio web',
      link:
        'http://files.control-ambiental5.webnode.com.co/200000109-d6539d7adb/GTC93%20(1).pdf',
    },
    {
      texto: 'Icontec. (2007). Guía Técnica colombiana GTC 45. ',
      tipo: 'Documento de sitio web',
      link:
        'https://idrd.gov.co/sitio/idrd/sites/default/files/imagenes/gtc450.pdf',
    },
    {
      texto: 'MinAmbiente. (2005). Resolución 1023.',
      tipo: 'Documento de sitio web',
      link:
        'https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/sostenibilidad_sectores_productivos/res_1023_280705_adopcion_general.pdf',
    },
    {
      texto: 'EAN. (2014). Principales normas ambientales.',
      tipo: 'Documento de sitio web',
      link:
        'https://repository.ean.edu.co/bitstream/handle/10882/1615/NormasAmbientales.pdf;js',
    },
    {
      texto: 'MinAmbiente. (2019). Resolución 1561 de 2019. ',
      tipo: 'Documento de sitio web',
      link:
        'https://www.minambiente.gov.co/images/normativa/app/resoluciones/fe-res%201561%20de%202019.pdf',
    },
    {
      texto: 'MinAmbiente. (2018). Resolución 2210 de 2018. ',
      tipo: 'Documento de sitio web',
      link:
        'https://www.minambiente.gov.co/images/normativa/app/resoluciones/0b-res%202210%20de%202018.pdf',
    },
    {
      texto: 'MinAmbiente. (2018). Resolución 1447 de 2018. ',
      tipo: 'Documento de sitio web',
      link:
        'https://www.minambiente.gov.co/images/normativa/app/resoluciones/98-RES%201447%20DE%202018.pdf',
    },
    {
      texto: 'MinAmbiente. (2018). Ley 1741 de 2018.',
      tipo: 'Documento de sitio web',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/LEY%201931%20DEL%2027%20DE%20JULIO%20DE%202018.pdf',
    },
    {
      texto: 'Congreso de Colombia. (2017). Ley 1844 de 2017. ',
      tipo: 'Documento de sitio web',
      link: 'ww.secretariasenado.gov.co/senado/basedoc/ley_1844_2017.html',
    },
    {
      texto: 'MinAmbiente. (2017). Decreto 870 de 2017.',
      tipo: 'Documento de sitio web',
      link:
        'http://es.presidencia.gov.co/normativa/normativa/DECRETO%20870%20DEL%2025%20DE%20MAYO%20DE%202017.pdf',
    },
    {
      texto: 'MinAmbiente (2016). Resolución 689 de 2016.',
      tipo: 'Documento de sitio web',
      link:
        'https://www.minambiente.gov.co/images/normativa/app/resoluciones/9a-res%20689%20may%202016.pdf',
    },
    {
      texto: 'Congreso de Colombia. (2011). Ley 1450 de 2011. ',
      tipo: 'Documento de sitio web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=43101',
    },
    {
      texto: 'MinAmbiente. (2010). Decreto 2820 de 2010.',
      tipo: 'Documento de sitio web',
      link:
        'https://www.minambiente.gov.co/images/normativa/decretos/2010/dec_2820_2010.pdf',
    },
    {
      texto: 'Congreso de la República. (2009). Ley 1333 de 2009.',
      tipo: 'Documento de sitio web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36879',
    },
    {
      texto: 'MinAmbiente. (2005). Resolución 1023 de 2005. ',
      tipo: 'Documento de sitio web',
      link:
        'https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/sostenibilidad_sectores_productivos/res_1023_280705_adopcion_general.pdf',
    },
    {
      texto: 'Congreso de Colombia. (1994). Ley 140 de 1994.',
      tipo: 'Documento de sitio web',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0140_1994.html',
    },
    {
      texto:
        'Ministerio de Tecnologías de la Información. (2010). Resolución 415 de 2010.',
      tipo: 'Documento de sitio web',
      link:
        'https://www.redjurista.com/Documents/resolucion_415_de_2010_ministerio_de_tecnologias_de_la_informacion_y_las_comunicaciones.aspx#/',
    },
    {
      texto: 'MinAmbiente. (1973). Ley 23 de 1973.',
      tipo: 'Documento de sitio web',
      link:
        'https://www.lexbase.co/lexdocs/indice/1973/l0023de1973#:~:text=%22%20LEY%2023%20de%201973%20',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Ana María Buitrago Toro',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario La Granja <br>Regional Tolima',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de diseño y metrología <br>Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de diseño y metrología <br>Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa	',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah Gamboa',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
