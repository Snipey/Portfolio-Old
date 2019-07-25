<template>
  <div class="mainContainer">
    <nuxt />
    <div class="bg animate fadeIn delay-1s is-fullwidth-mobile">
      <video
        loop
        muted
        autoplay
        poster="img/videoframe.jpg"
        class="fullscreen-bg__video"
      >
        <source src="bg.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<style>
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
}

.fullscreen-bg__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 65%;
}

@media (min-aspect-ratio: 16/9) {
  .fullscreen-bg__video {
    height: 300%;
    top: -100%;
  }
}

@media (max-aspect-ratio: 16/9) {
  .fullscreen-bg__video {
    width: 300%;
    left: -100%;
  }
}

@media (max-width: 767px) {
  .bg {
    background-color: #0d070f;
  }

  .fullscreen-bg__video {
    display: none;
  }
}
</style>
