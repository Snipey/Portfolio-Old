<template>
  <div class="mainContainer is-fullwidth">
    <nuxt />
    <div class="bg animate fadeIn delay-1s is-fullwidth-mobile"></div>
  </div>
</template>

<script>
// (function titleScroller(text) {
//     document.title = text;
//     console.log(text);
//     setTimeout(function () {
//         titleScroller(text.substr(1) + text.substr(0, 1));
//     }, 500);
// }(" Snipey | Will develop the best stuff :D "));
</script>

<style>
html {
  overflow-y: auto !important;
}

.mainContainer {
  height: 100%;
  min-height: 100% !important;
  bottom: 0;
  display: inline-block;
  width: 100%;
}

.bg {
  background-color: #0d070f;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;
  background-image: url("~assets/bg.jpg");
  background-position: center;
  background-size: cover;
  filter: blur(6px);
  -webkit-filter: blur(6px);
  transform: scale(1.1);
}

@media (max-width: 767px) {
  .bg {
    background-color: #0d070f;
  }
}
</style>
