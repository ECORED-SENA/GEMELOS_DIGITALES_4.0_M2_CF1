export default {
  global: {
    componenteFormativo: 'Modelado de formas en estilo libre',
    descripcionCurso:
      'Este componente tiene como objetivo guiar al estudiante en el desarrollo de habilidades y destrezas para la creación de gemelos digitales en forma libre mediante el conocimiento y la aplicación del sistema CAD NX. Según Siemens (s. f.-b), un gemelo digital es una representación virtual de un producto o proceso físico que se utiliza para comprender y predecir las características de rendimiento de su equivalente físico.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
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
        titulo: 'Creación de formas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Interface',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Panel de herramientas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Comandos de creación',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Comandos de edición',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Resolución de faceta aumentada',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Definición de polilíneas de jaula',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Modelado síncrono',
        desarrolloContenidos: true,
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
      referencia:
        'd3plus. (2018, julio 16). Tutorial Básico introductorio a modelado CAD NX 10 [Video]. YouTube. ',
      link: 'https://youtu.be/iGTENoC7ryg',
    },
    {
      referencia:
        'Dep Fab Mecanica Marianao. (2019, noviembre 20). NX Curso drawing y acotado FMC0 M01 [Video]. YouTube. ',
      link: 'https://youtu.be/pFcMlBL5Ps0',
    },
    {
      referencia:
        'Joyanes, L. (2017). Industria 4.0 La Cuarta Revolución Industrial. Marcombo. ',
    },
    {
      referencia:
        'Leu, M., Tao, W., Ghazanfari, A. y Kolan, K. (2019). NX 12 for Engineering Design. Missouri University of Science and Technology. ',
      link: 'https://www.academia.edu/37546347/NX_12_for_Engineering_Design',
    },
    {
      referencia:
        'Lui, A. [Inge Lui]. (2020). Unidad 2 Ensambles utilizando NX [Video]. YouTube. ',
      link: 'https://youtu.be/J5h38RBj_hI',
    },
    {
      referencia:
        'Mundo tutorial / Tutorial world. (2017, octubre 10). Siemens NX. Pieza 3D. Tutorial [Video]. YouTube. ',
      link: 'https://youtu.be/UeJ1Yegal9E',
    },
    {
      referencia: 'Siemens. (s. f.-a). Formación NX CAD básico. ',
      link: 'https://www.academia.edu/29809639/FORMACION_NX_CAD_BASICO',
    },
    {
      referencia:
        'Siemens. (s. f.-b). Modelado de formas de formato libre | Siemens Software. ',
      link:
        'https://www.plm.automation.siemens.com/global/es/products/mechanical-design/freeform-shape-modeling.html',
    },
    {
      referencia: 'Siemens. (2017). Siemens Documentation: Bridge Face. ',
      link:
        'https://docs.plm.automation.siemens.com/tdoc/nx/12/nx_help#uid:xid1128417:index_xid851385:xid1123951:xid610642',
    },
    {
      referencia:
        'Siemens. (2020). Documentación didáctica para cursos de formación. ',
      link:
        'https://www.automation.siemens.com/sce-static/learning-training-documents/tia-portal/digital-twin/sce-150-004-mcd-tia-com-digital-twin-at-education-static-model-nx-hs-darmstadt-1219-es.pdf',
    },
    {
      referencia:
        'Skogsfjord, M. (2015). NX Realize Shape – Lesson 2 | NX-Portalen. NX-Portalen. ',
      link: 'http://nxportalen.com/blog/2015/07/17/realize-shape-lesson-2/',
    },
    {
      referencia:
        'Tickoo, S. (2018). Siemens NX 12.0 for Designers. CADCIM Technologies.',
    },
  ],
  glosario: [
    {
      termino: 'CAD CAM',
      significado:
        ' CAD CAM es la integración del diseño asistido por ordenador y el software de fabricación asistido por ordenador, con el objetivo de obtener una gestión sencilla de los cambios del diseño, una concepción del diseño simultánea y una configuración del proceso de fabricación flexible, especialmente para el diseño y la fabricación de prototipos y de piezas acabadas.',
    },
    {
      termino: 'CAD',
      significado:
        'el diseño asistido por ordenador (CAD, por sus siglas en inglés) consiste en el uso de programas de ordenador para crear, modificar, analizar y documentar representaciones gráficas en 2D o 3D de objetos físicos.',
    },
    {
      termino: 'Dividir jaula',
      significado:
        'fragmenta o divide las caras de la jaula de control de forma uniforme, a partir de la selección de aristas.',
    },
    {
      termino: 'Extrudir la jaula',
      significado:
        'crea nuevas caras de jaula extruyendo caras, bordes de jaula o polilíneas de jaula existentes.',
    },
    {
      termino: 'Formas primitivas',
      significado:
        'herramienta que permite crear diferentes formas en 3D, como esferas, cilindros o bloques, y figuras en 2D, como círculos y rectángulos.',
    },
    {
      termino: 'Gemelo digital',
      significado:
        'un gemelo digital es una representación virtual de un producto o proceso físico, que se utiliza para comprender y predecir las características de rendimiento de su equivalente físico. Los gemelos digitales se utilizan a lo largo de todo el ciclo de vida del producto, para simular, predecir y optimizar el producto y el sistema de producción, antes de invertir en prototipos y activos físicos.',
    },
    {
      termino: 'Imagen rasterizada',
      significado:
        'es un comando que se encuentra en la pestaña de inicio, en plano datum, y permite insertar varias imágenes en formatos jpg, png o bmp en diferentes planos de referencia.',
    },
    {
      termino: 'Modelado síncrono',
      significado:
        'conjunto de herramientas que le permiten al diseñador modificar modelos 3D complejos que no cuentan con el historial de operación, relaciones y dependencias del modelo.',
    },
    {
      termino: 'Mover cara',
      significado:
        'desplaza o rota un conjunto de caras y ajusta las caras adyacentes, modificando su forma geométrica.',
    },
    {
      termino: 'NX',
      significado:
        'el software NX es una solución integrada de diseño, ingeniería y fabricación de productos, que ayuda a ofrecer productos innovadores, de forma más rápida y eficiente.',
    },
    {
      termino: 'Región desplazada',
      significado:
        'desplaza un conjunto de caras y ajusta las caras adyacentes para acomodarlas. Puede adicionar o sustraer material.',
    },
    {
      termino: 'Subdividir cara',
      significado:
        'desplaza las aristas externas de las caras seleccionadas de la jaula de control para subdividirlas.',
    },
    {
      termino: 'Transformar jaula',
      significado:
        'el comando transformar la jaula permite girar, trasladar o escalar elementos de la jaula de control.',
    },
  ],
  complementario: [
    {
      texto:
        'Tickoo, S. (2018). Siemens NX 12.0 for Designers. CADCIM Technologies.',
      tipo: 'Libro',
      link:
        'https://www.academia.edu/44135303/Siemens_NX_12_0_for_Designers_11th_Edition_Sham_tickoo',
    },
    {
      texto: 'Siemens. (s. f.). Formación NX CAD básico.',
      tipo: 'Ebook',
      link: 'https://www.academia.edu/29809639/FORMACION_NX_CAD_BASICO',
    },
    {
      texto:
        'Miror. (2015a, julio 14). NX Realize Shape | 1 - Introduction [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LpChmTGr9EE&feature=youtu.be',
    },
    {
      texto:
        'Miror. (2015b, julio 17). NX Realize Shape | 2 - Joystick Design [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=P58RdcFP9SU&feature=youtu.be',
    },
    {
      texto:
        'Miror. (2015c, julio 30). NX Realize Shape | 3 - Road Bike Concept Design [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-CFlae4Ivdk&feature=youtu.be',
    },
    {
      texto:
        'NX Skill Share. (2014, 28 junio). NX9 Realize shape - vacuum [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/INQXEa7Nj-A',
    },
    {
      texto:
        'Skogsfjord, M. (2015). NX Realize Shape – Lesson 2 | NX-Portalen. NX-Portalen.',
      tipo: 'Blog post',
      link: 'http://nxportalen.com/blog/2015/07/17/realize-shape-lesson-2/',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Riveros',
        cargo: 'Experto Temático',
        centro: 'Centro Diseño y Metrología',
      },
      {
        nombre: 'José Eduardo Chaves Peña',
        cargo: 'Experto Temático',
        centro: 'Centro de Diseño Tecnológico Industrial',
      },
      {
        nombre: 'Carlos Andrés Ossa Jiménez',
        cargo: 'Experto Temático',
        centro: 'Centro de Diseño Tecnológico Industrial',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisor Metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Arnulfo Beltrán Mojica',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Camila Ovalle Ospina',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
