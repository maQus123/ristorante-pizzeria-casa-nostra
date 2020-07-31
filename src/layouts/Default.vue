<template>
  <div class="layout">
    <div class="container">
      <div class="row">
        <div class="col custom-logo-background">
          <g-link class="nav__link" to="/">
            <img class="img-fluid mx-auto d-block py-4" src="/logo.png" />
          </g-link>
        </div>
      </div>
      <div class="row">
        <div class="custom-nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/karte/pizza/">Pizza</g-link>
          <g-link class="nav__link" to="/karte/nudeln/">Nudeln</g-link>
          <g-link class="nav__link" to="/karte/salat/">Salat</g-link>
          <g-link class="nav__link" to="/karte/fleisch/">Fleisch</g-link>
          <g-link class="nav__link" to="/oeffnungszeiten/">Öffnungszeiten</g-link>
          <g-link class="nav__link" to="/kontakt/">Kontakt</g-link>
          <g-link class="nav__link" to="/ueber-uns/">Über Uns</g-link>
        </div>
      </div>
      <div class="row">
        <b-carousel style="text-shadow: 0px 0px 2px #000" controls fade indicators>
          <b-carousel-slide img-src="/slider-pizza.png"></b-carousel-slide>
          <b-carousel-slide img-src="/slider-gemuese.png"></b-carousel-slide>
          <b-carousel-slide img-src="/slider-pasta.png"></b-carousel-slide>
          <b-carousel-slide img-src="/slider-besteck.png"></b-carousel-slide>
          <b-carousel-slide img-src="/slider-salat.png"></b-carousel-slide>
          <b-carousel-slide img-src="/slider-steak.png"></b-carousel-slide>
        </b-carousel>
      </div>
      <div class="row">
        <slot />
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="row">
          <p class="py-5 mx-auto d-block">
            Copyright © 2020 Restaurant und Pizzeria Casa Nostra in Schloß Holte Stukenbrock -
            <g-link class="nav__link" to="/impressum/">Impressum</g-link>-
            <g-link class="nav__link" to="/datenschutz/">Datenschutz</g-link>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.custom-logo-background {
  background-image: url("/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

div.custom-nav {
  overflow: auto;
  white-space: nowrap;
}

div.custom-nav a {
  display: inline-block;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}
</style>
