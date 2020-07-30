<template>
  <div class="layout">
    <div class="container">
      <div class="row">
        <div class="col custom-logo-background">
          <img class="img-fluid mx-auto d-block py-4" src="/logo.png" />
        </div>
      </div>
      <div class="row">
        <div class="custom-nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/speisekarte/">Speisekarte</g-link>
          <g-link class="nav__link" to="/oeffnungszeiten/">Öffnungszeiten</g-link>
          <g-link class="nav__link" to="/kontakt/">Kontakt</g-link>
          <g-link class="nav__link" to="/ueber-uns/">Über Uns</g-link>
          <g-link class="nav__link" to="/impressum/">Impressum</g-link>
          <g-link class="nav__link" to="/datenschutz/">Datenschutz</g-link>
        </div>
      </div>
      <div class="row">
        <slot />
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="row">
          <p
            class="py-5 mx-auto d-block"
          >Copyright © 2020 Ristorante und Pizzeria Casa Nostra - Restaurant und Pizzeria in Schloß Holte Stukenbrock</p>
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
