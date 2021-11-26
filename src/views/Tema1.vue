<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Creación de formas
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5(data-aos="fade-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/img4.svg', style="width: 350px").m-auto
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p #[b Para la creación de las formas, se requiere un conjunto de recursos presentados a través de las diferentes herramientas que se proporcionan desde la forma libre]; de esta manera, #[span.txt-deco1 #[b los sistemas CAD ofrecen, según  Siemens (2017)]], un amplio conjunto de herramientas de diseño en forma libre, que resultan útiles en todas las disciplinas y procesos de desarrollo de productos, desde el concepto hasta la fabricación. #[b Un ejemplo de ello se comparte en la Figura 01, atendiendo a la siguiente descripción].
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p.mb-4 #[b Las herramientas de diseño de forma libre permiten crear modelos híbridos, combinando superficies y sólidos mediante #[span.txt-deco1 #[i Realize Shape]]]. Se pueden crear diseños conceptuales rápidamente, #[b a partir de imágenes ráster o bocetos CAD], utilizando curvas y secciones para extruir, barrer, girar y extender la geometría, superficies a partir de mallas de curvas.
        .cajon.color-primario.p-4
          p.mb-0 El modelado síncrono de forma libre permite esculpir sólidos moviendo curvas de isoparámetros y polos, con la simplicidad de empujar y tirar (Siemens, s. f.-b), permitiendo así elaborar las representaciones digitales que componen dicho estilo. Es así como se hace necesario reconocer los elementos que lo integran y que se describen en los siguientes apartados.
      .col-lg-4
        figure(data-aos="fade-up")
            img(src='@/assets/curso/img5.svg', style="width: 350px").m-auto
    .row.bg-color3.px-5
      .col-12
        #t_1_1
        .titulo-segundo
          h2 1.1 Interfaz
        p.mb-5 En el diseño del #[b gemelo digital], se presentan #[b las simulaciones que permiten realizar predicciones de cómo actuarían los productos o el funcionamiento de los diferentes procesos]. Dentro de los elementos que lo hacen posible, se relaciona #[b #[span.txt-deco2 NX #[i Realize Shape]]], el cual proporciona, como se menciona en #[b #[span.txt-deco1 Siemens (2017)]], #[b un entorno único de diseño libre para generar productos con formas muy estilizadas o superficies complejas]. Es una solución de la industria que integra las herramientas avanzadas, flexibles y fáciles de usar, para realizar #[b #[span.txt-deco1 diseños de forma libre con un paquete de software CAD/CAM/CAE]]. En la Figura 2, se ilustra lo que se ha relacionado anteriormente.
        .row.justify-content-center
          .col-lg-10(data-aos="fade-left")
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco2 Figura 2.] Realize Shape
            figure.mb-5
              img(src='@/assets/curso/img2.png', style="width: 1200px").m-auto
              figcaption.mt-3.bg-color4 #[b Nota.] Adaptada del sistema CAD NX 12.
          .cajon.color-primario.p-4
            p.mb-0 #[b La figura anterior permite orientar los diseños de #[span.txt-deco1 gemelos digitales desde diferentes #[i softwares]] y necesidades].
        separador.mb-5
        #t_1_2
        .titulo-segundo
          h2 1.2 Panel de herramientas
        p.mb-5 #[b Las diferentes herramientas que se proporcionan para la elaboración de los productos] se articulan de acuerdo a su uso y evidencia en la presentación que lleva a cabo. #[b #[span.txt-deco1 El panel de herramientas está organizado por grupos:]] en el #[b grupo #[span.txt-deco2 crear]], se encuentran los comandos para definir un producto partiendo de una forma primitiva; el #[b segundo #[span.txt-deco2 grupo]] contiene las herramientas que facilitan la edición o modificación de una forma. En la Figura 3, se evidencia la forma cómo estas se agrupan para su implementación dentro de los diseños que se requieren llevar a cabo.
        .row.justify-content-center
          .col-lg-10(data-aos="fade-right")
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco2 Figura 3.] Panel de herramientas de #[i Realize Shape]
            figure
              img(src='@/assets/curso/img3.png', style="width: 1200px").m-auto
              figcaption.mt-3.bg-color4 #[b Nota.] Adaptada del sistema CAD NX 12.
        separador.mb-5
        #t_1_3
        .titulo-segundo
          h2 1.3 Comandos de creación
        .row.align-items-center.mb-5
          .col-lg-4.mb-4.mb-lg-0
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img9.svg', style="width: 350px").m-auto
          .col-lg-8
            p.mb-4 Dentro de las opciones que se encuentran para crear las diferentes formas, se relacionan los comandos que se requieren para que se llegue al producto deseado. El #[b #[span.txt-deco2 NX #[i Realize Shape]] es un entorno de tareas que le permite crear formas sólidas o superficies manipulando y subdividiendo una caja de control de una forma primitiva inicial, como un bloque, cilindro o esfera. #[span.txt-deco1 #[i Realize Shape]]] permite crear productos que requieran formas orgánicas o estéticamente agradables. Para visualizar dichos comandos, observe la Figura 4.
            .row.justify-content-center
              .col-lg-10(data-aos="fade-right")
                .titulo-sexto.color-acento-contenido
                  h5 #[span.txt-deco2 Figura 4.] Panel de herramientas de #[i Realize Shape]
                figure
                  img(src='@/assets/curso/img4.png', style="width: 800px").m-auto
                  figcaption.mt-3.bg-color4 #[b Nota.] Adaptada del sistema CAD NX 12.
    p.mb-5 #[b En las pestañas, se comparte el #[span.txt-deco1 uso de herramientas y comandos de creación, diseño y desarrollo]].
    TabsB.color-acento-contenido
      .py-4.py-md-5(titulo="Imagen ráster" :icono="require('@/assets/curso/img11.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-4.mb-md-0
            h3 Imagen ráster
            p Esta herramienta se encuentra en la pestaña de inicio, en plano de datum, y permite insertar varias imágenes en formatos jpg, png o bmp, en diferentes planos de referencia.
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco2 Figura 5.] Imagen Rasterizada
            figure.mb-5
              img(src='@/assets/curso/img27.png', style="width: 900px").m-auto
              figcaption.mt-3.bg-color4 #[b Nota.] Adaptada del sistema CAD NX 12.
      .py-4.py-md-5(titulo="Formas primitivas" :icono="require('@/assets/curso/img12.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-md-0
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco2 Figura 6.] Formas primitivas
            figure.mb-5
              img(src='@/assets/curso/img28.png', style="width: 900px").m-auto
              figcaption.mt-3.bg-color4 #[b Nota.] Adaptada del sistema CAD NX 12.
          .col-lg-4
            h3 Formas primitivas
            p Este comando permite crear diferentes formas en 3D, como esferas, cilindros o bloques, y figuras en 2D, como círculos y rectángulos.
      .py-4.py-md-5(titulo="Iniciar el modelo simétrico" :icono="require('@/assets/curso/img13.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-4.mb-md-0
            h3 Iniciar el modelo simétrico
            p Este comando permite crear y editar una figura de forma simétrica (Skogsfjord, 2015).
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco2 Figura 7.] Iniciar el modelo simétrico
            figure.mb-5
              img(src='@/assets/curso/img29.png', style="width: 900px").m-auto
              figcaption.mt-3.bg-color4 #[b Nota.] Adaptada del sistema CAD NX 12.
      .py-4.py-md-5(titulo="Extrudir la jaula" :icono="require('@/assets/curso/img14.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-md-0
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco2 Figura 8.] Extrudir la jaula
            figure.mb-5
              img(src='@/assets/curso/img30.png', style="width: 900px").m-auto
              figcaption.mt-3.bg-color4 #[b Nota.] Adaptada del sistema CAD NX 12.
          .col-lg-4
            h3 Extrudir la jaula
            p Crea nuevas caras de jaula extruyendo caras, bordes de jaula o polilíneas de jaula existentes.
      .py-4.py-md-5(titulo="Jaula de tubo" :icono="require('@/assets/curso/img15.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-4.mb-md-0
            h3 Jaula de tubo
            p Este comando se emplea para crear un tubo utilizando una polilínea como línea central y especificando el número de segmentos de la jaula.
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco2 Figura 9.] Jaula de tubo
            figure.mb-5
              img(src='@/assets/curso/img31.png', style="width: 900px").m-auto
              figcaption.mt-3.bg-color4 #[b Nota.] Adaptada del sistema CAD NX 12.
      .py-4.py-md-5(titulo="Cara en puente" :icono="require('@/assets/curso/img16.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-md-0
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco2 Figura 10.] Cara en puente
            figure.mb-5
              img(src='@/assets/curso/img32.png', style="width: 900px").m-auto
              figcaption.mt-3.bg-color4 #[b Nota.] Adaptada del sistema CAD NX 12.
          .col-lg-4
            h3 Cara en puente
            p Este comando conecta dos conjuntos de caras, generando una transición en entre ellas, fusionando la forma y manteniendo la continuidad de las superficies.
      .py-4.py-md-5(titulo="Comando de relleno" :icono="require('@/assets/curso/img17.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-4.mb-md-0
            h3 Comando de relleno
            p El comando de relleno permite agregar una cara nueva a la jaula de control, con dos, tres o cuatro aristas abiertas.
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco2 Figura 11.] Comando de relleno
            figure.mb-5
              img(src='@/assets/curso/img33.png', style="width: 900px").m-auto
              figcaption.mt-3.bg-color4 #[b Nota.] Adaptada del sistema CAD NX 12.
    separador.mb-5
    .row.bg-color3.px-5
      .col-12
        #t_1_4
        .titulo-segundo
          h2 1.4 Comandos de edición
        p.mb-5 Con lo que se ha venido desarrollando en #[b #[span.txt-deco2 el uso de los comandos]], se han logrado #[b #[span.txt-deco1 reconocer sus funciones desde la implementación]]. Ahora, se hace necesario profundizar en los #[b comandos de edición, definidos como el grupo de comandos donde se encuentran todas las herramientas que permiten modificar el #[span.txt-deco2 modelo en 3D]]. En la Figura 12, se identifican cuáles serían estas herramientas.
        .row.justify-content-center
          .col-lg-10(data-aos="fade-left")
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco2 Figura 12.] Herramientas de modificación
            figure.mb-5
              img(src='@/assets/curso/img6.png', style="width: 1200px").m-auto
              figcaption.mt-3.bg-color4 #[b Nota.] Adaptada del sistema CAD NX 12.
        h3.mb-5 #[b Para ampliar acerca de cómo hacer #[span.txt-deco1 uso de los comandos de edición], observe la siguiente presentación. ]
        SlyderA.mb-5
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img8.png', style="width: 1200px").m-auto
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img9.png', style="width: 1200px").m-auto
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img10.png', style="width: 1200px").m-auto
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img11.png', style="width: 1200px").m-auto
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img12.png', style="width: 1200px").m-auto
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img13.png', style="width: 1200px").m-auto
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img14.png', style="width: 1200px").m-auto
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img15.png', style="width: 1200px").m-auto
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img16.png', style="width: 1200px").m-auto
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/lLl0soLHoiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        separador.mb-5
        #t_1_5
        .titulo-segundo
          h2 1.5 Resolución de faceta aumentada
        p.mb-4 #[b En la visualización de las piezas o productos que se elaboran a partir del modelo seleccionado], se reconoce la #[b #[span.txt-deco1 resolución de faceta aumentada]], la cual se puede presentar como se evidencia en la Figura 21.
        .cajon.color-primario.p-4.mb-5
          p.mb-0 #[b Esta configuración permite mejorar la calidad de visualización]. Se encuentra en la #[b #[span.txt-deco1 pestaña vista]] y, luego, en #[b #[span.txt-deco2 preferencias; en escala de faceta, seleccione fijo en factor de refinado 10]].
        .row.justify-content-center
          .col-lg-10(data-aos="fade-right")
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco2 Figura 21.] Resolución de faceta aumentada
            figure.bg-white
              img(src='@/assets/curso/img25.png', style="width: 1200px").m-auto
              figcaption.mt-3.bg-color4 #[b Nota.] Adaptada del sistema CAD NX 12.
        separador.mb-5
        #t_1_6
        .titulo-segundo
          h2 1.6 Definición de polilíneas de jaula
        p.mb-4 #[b Las líneas que se definen en el desarrollo de las herramientas para crear, #[span.txt-deco2 se componen de diferentes elementos]], entre ellos, #[b #[span.txt-deco1 la polilínea de jaula]], la cual se comparte en la Figura 22, desde su aplicación.
        .cajon.color-primario.p-4.mb-5
          p.mb-0 #[b Este comando crea una #[span.txt-deco1 polilínea en un plano 2D, vista o en 3D].]
        .row.justify-content-center.mb-5
          .col-lg-10(data-aos="fade-left")
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco2 Figura 22.] Polilínea de jaula
            figure.bg-white
              img(src='@/assets/curso/img26.png', style="width: 1200px").m-auto
              figcaption.mt-3.bg-color4 #[b Nota.] Adaptada del sistema CAD NX 12.
        p.mb-0 A partir de ejemplos, uso y ubicación dentro del menú, se hace posible la implementación de cada uno de los comandos y herramientas necesarias para lograr el desarrollo óptimo que espera el cliente y la propuesta de los diferentes productos.
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
