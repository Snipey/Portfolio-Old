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
    background-image: url("http://getwallpapers.com/wallpaper/full/a/a/9/924984-amazing-neon-purple-backgrounds-3840x2160-full-hd.jpg");
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