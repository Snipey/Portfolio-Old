<template>
  <div class="mainContainer">
    <nuxt />
    <div class="bg"></div>
  </div>
</template>
<style>

.mainContainer {
  height: 100%;
  min-height: 100% !important;
  bottom: 0;
  display: inline-block;
  position: absolute;
  width: 100%;
}
  .bg {
    background-image: url("~assets/bg.jpg");
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -100;
    height: 100%;
    width: 100%;
    -webkit-filter: blur(1px);
    -moz-filter: blur(1px);
    -o-filter: blur(1px);
    -ms-filter: blur(1px);
    filter: blur(1px);
  }
</style>