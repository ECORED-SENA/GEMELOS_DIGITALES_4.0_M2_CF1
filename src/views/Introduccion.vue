<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 Los gemelos digitales se utilizan a lo largo de todo el ciclo de vida del producto para simular, predecir y optimizar el producto y el sistema de producción, antes de invertir en prototipos y activos físicos. Las diferentes herramientas de NX se agrupan dentro de una serie de aplicaciones, una de las más empleadas es la de modelado, con la cual se crea un nuevo componente o ensamble. Teniendo en cuenta las especificaciones del producto, se elaboran modelos digitales en estilo libre, a través de formas en 3D, curvas y superficies.
    .row.align-items-center.mb-5(data-aos="slide-left")
      .col-2
        figure.img-position1
          img(src='@/assets/curso/img1.png')
      .col-10.bg-color1
        p.mb-0 Para la lectura y apropiación de los contenidos dispuestos en este componente formativo, se comparte el siguiente video, que permite reconocer los #[span.txt-deco1 elementos a tener en cuenta] desde la introducción, los #[span.txt-deco2 conceptos y temáticas] a desarrollar en este espacio de aprendizaje.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/9rwh8ezI3vM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center(data-aos="slide-right")
      .col-11
        .row.bg-color2.align-items-center.justify-content-center
          .col-10.col-lg-9.mb-4.mb-lg-0
              p.mb-0 #[span #[b #[span.txt-deco1 El diseño] de los diferentes productos requiere una serie de herramientas]] que brindan respuesta a los intereses y necesidades del cliente y el contexto donde se apliquen. En los siguientes numerales, se presentan aquellas que permiten llevar al #[span.txt-deco1 #[b diseño de forma libre, para cumplir y atender dichas necesidades]].
          .col-10.col-lg-3
            figure
              img(src='@/assets/curso/img3.svg', style="width: 350px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
