<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Modelado síncrono
    .row.bg-color3.px-5
      .col-12
        .row.justify-content-end.bg-color5.mb-5(data-aos="fade-left")
          .col-lg-8
            p.mb-0 A través del #[b #[span.txt-deco1 modelado síncrono], se evidencia que el NX ofrece un conjunto de herramientas en el panel de comandos] de la aplicación modelo, que le #[b permiten al diseñador modificar #[span.txt-deco2 modelos 3D complejos] que no cuentan con el historial de operación, relaciones y dependencias del modelo]. Las opciones de #[b #[i #[span.txt-deco1 “empujar y tirar”]]] se pueden utilizar para #[b modificar el modelo 3D, seleccionando caras, aristas y secciones transversales. #[span.txt-deco2 NX admite el modelado síncrono] para trabajar con modelos 3D provenientes de otros sistemas CAD], como:
        .row.align-items-center.mb-4
          .col-lg-6.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img38.svg', style="width: 550px").m-auto
          .col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img39.svg', style="width: 550px").m-auto
        .cajon.color-primario.p-4.mb-5
          p.mb-0 Observe la Figura 23, #[b donde se presenta el #[span.txt-deco1 grupo de comandos para el modelado síncrono]].
        .row.justify-content-center.mb-5
          .col-lg-6(data-aos="fade-left")
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco2 Figura 23.] Grupo de comandos
            figure.bg-white
              img(src='@/assets/curso/img7.png', style="width: 700px").m-auto
              figcaption.mt-3.bg-color4 #[b Nota.] Adaptada del sistema CAD NX 12.
        p.mb-5 #[b Para que se lleve a cabo este #[span.txt-deco1 tipo de modelado]], se sugiere hacer uso de las siguientes #[b #[span.txt-deco1 herramientas]] que se presentan en las diapositivas. Observe cada una de ellas desde su descripción y el nombre que le corresponde.
        SlyderA.mb-5
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img41.svg', style="width: 1200px").m-auto
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img42.svg', style="width: 1200px").m-auto
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img43.svg', style="width: 1200px").m-auto
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img44.svg', style="width: 1200px").m-auto
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img45.svg', style="width: 1200px").m-auto
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img46.svg', style="width: 1200px").m-auto
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img47.svg', style="width: 1200px").m-auto
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img48.svg', style="width: 1200px").m-auto
        .row.bg-color6.justify-content-center(data-aos="fade-down")
          .col-6.col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/img50.svg', style="width: 1200px").m-auto
          .col-lg-9
            p.mb-0 Al concluir este componente formativo, #[b se desarrollaron habilidades y destrezas que le permitieron esculpir modelos 3D en forma libre], empleando herramientas para la creación y edición de formas, desde la aplicación #[b #[span.txt-deco1  #[i Realize Shape] de NX]], lo que permitió #[b definir morfológicamente el producto]. Igualmente, con #[b #[span.txt-deco2 la tecnología síncrona]], #[i experimentó la modificación rápida de modelos importados desde otros sistemas] #[b #[span.txt-deco1 CAD]]. Por otra parte, #[b a través de las actividades didácticas planteadas], se afianzó el logro del resultado de aprendizaje y se facilitó la realización de las diferentes evidencias propuestas en este componente formativo.

</template>

<script>
export default {
  name: 'Tema2',
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
