<template>
  <Layout>
    <div>
      <b-carousel
        style="text-shadow: 0px 0px 2px #000"
        controls
        fade
        indicators
      >
        <b-carousel-slide img-src="slider-pizza.png"></b-carousel-slide>
        <b-carousel-slide img-src="slider-gemuese.png"></b-carousel-slide>
        <b-carousel-slide img-src="slider-pasta.png"></b-carousel-slide>
        <b-carousel-slide img-src="slider-besteck.png"></b-carousel-slide>
        <b-carousel-slide img-src="slider-salat.png"></b-carousel-slide>
        <b-carousel-slide img-src="slider-steak.png"></b-carousel-slide>
      </b-carousel>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
};
</script>

<style>
</style>
