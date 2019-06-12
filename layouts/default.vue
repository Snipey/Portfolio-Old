<template>
  <div class="mainContainer">
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<style>
.mainContainer {
  background-image: linear-gradient(#bf68c4, #a751c4);
  height: 100%;
  min-height: 100% !important;
  bottom: 0;
  display: inline-block;
  position: absolute;
  width: 100%;
}
</style>
<script>
  import Navbar from '~/components/Navbar.vue'
  import Footer from '~/components/Footer.vue'
  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>
