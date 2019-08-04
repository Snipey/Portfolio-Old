<template>
  <div class="container is-fullwidth-mobile">
    <!-- PROJECT MODAL START -->
    <div class="modal animate zoomInDown" id="projectModal">
      <div class="modal-background" v-on:click="projectModal"></div>
      <div class="modal-card animated zoomInDown">
        <div class="project port-text">
          <button
            class="modal-close is-large"
            aria-label="close"
            v-on:click="projectModal"
          />
          <div class="project-head">
            <h2>
              >
              <a
                class="project-link"
                href="https://gitlab.com/thesporkening/sporkbot"
                >SporkBot</a
              >
              <
            </h2>
          </div>
          <div class="project-body">
            <p>A bot for "The Sporkening" gaming community</p>
          </div>
          <hr />
          <div class="project-head">
            <h1>
              >
              <a class="project-link" href="https://hockeyhq.co"
                >Hockey Headquarters</a
              >
              <
            </h1>
          </div>
          <div class="project-body">
            <p>A simulation game for fantasy hockey.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- PROJECT MODAL END -->
    <!-- CONTRIBUTION MODAL START -->
    <div class="modal animate zoomInDown" id="contributionModal">
      <div class="modal-background" v-on:click="contributionModal"></div>
      <div class="modal-card animated zoomInDown">
        <div class="project port-text">
          <button
            class="modal-close is-large"
            aria-label="close"
            v-on:click="contributionModal"
          />
          <div class="project-head">
            <h1>
              >
              <a
                class="project-link"
                href="https://gitlab.com/thesporkening/sporkbot"
                >PulseJS</a
              >
            </h1>
          </div>
          <div class="project-body">
            <p>Front-End Javascript framework</p>
          </div>
        </div>
      </div>
    </div>
    <!-- CONTRIBUTION MODAL END -->
    <!-- PORTFOLIO BODY START -->
    <div class="portfolio animated rotateIn">
      <!-- LOGO START -->
      <div class="columns">
        <div class="column">
          <div class="logo">< Snipey /></div>
          <div class="sub-logo">Full Stack Developer</div>
        </div>
      </div>
      <!-- LOGO END -->
      <div class="box">
        <div class="columns">
          <div class="column port-text">
            <p>
              My name is Stephen and I am a developer of sorts. I have made a
              few projects and currently am just working on hobby projects for
              me to learn a few new web technologies.
            </p>
            <br />
            <div class="columns">
              <div class="column is-half">
                <a
                  class="button is-fullwidth port-text-inv modal-button"
                  data-target="#projectModal"
                  v-on:click="projectModal"
                >
                  <b>Projects</b>
                </a>
              </div>
              <div class="column is-half">
                <a
                  class="button is-fullwidth port-text-inv modal-button"
                  data-target="#projectModal"
                  v-on:click="contributionModal"
                >
                  <b>Contributions</b>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Socials />
      </div>
    </div>
    <!-- PORTFOLIO BODY END -->
  </div>
</template>

<script>
// Import social icons from component
import Socials from "~/components/Socials.vue";

export default {
  //PRE-RENDER
  components: {
    Socials
  },
  methods: {
    //Toggle Project Modal
    projectModal() {
      let modal = document.getElementById("projectModal");
      let modal_classes = modal.classList;
      if (modal_classes.contains("is-active") === false) {
        modal_classes.add("is-active");
      } else {
        modal_classes.remove("is-active");
      }
    },
    contributionModal() {
      let modal = document.getElementById("contributionModal");
      let modal_classes = modal.classList;
      if (modal_classes.contains("is-active") === false) {
        modal_classes.add("is-active");
      } else {
        modal_classes.remove("is-active");
      }
    }
  }
};
</script>
<style scoped>
@media only screen and (max-width: 768px) {
  .container {
    width: 100%;
  }
}
@media only screen and (min-width: 1024px) {
  .container {
    width: 65vw;
  }
}
@media only screen and (min-width: 1360px) {
  .container {
    width: 55vw;
  }
}

.modal-button {
  box-shadow: 2px 2px 6px rgba(54, 54, 54, 1);
}
.modal-background {
  color: rgba(0, 0, 0, 0.27);
  height: 100%;
}
.project-head {
  font-size: 15pt;
  margin-bottom: 5px;
}
.project-link {
  color: #ffffff;
  text-decoration: underline;
}
.project-link:hover {
  color: #da4096;
  text-decoration: none;
}
.project > a {
  color: #fdfbff;
}
.project > a:hover {
  color: #da4096;
}
.modal-card {
  border: 5px solid #da4096;
  border-radius: 15px;
  background: #1b1b1b;
  padding: 15px;
}

::selection {
  background: transparent; /* WebKit/Blink Browsers */
}

::-moz-selection {
  background: transparent; /* Gecko Browsers */
}

.port-text {
  color: #fdfbff;
  text-align: center;
  font-size: 25px;
  font-family: "Bitter", cursive;
}

.logo {
  font-family: "Bitter", cursive;
  font-size: 46pt;
  font-weight: bolder;
  text-align: center;
  -webkit-text-stroke: 1.3px #da4096;
  color: transparent;
  text-shadow: 0px 0px 1.2px rgba(255, 255, 255, 0.8);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}

.sub-logo {
  font-family: "Bitter", cursive;
  font-size: 24pt;
  text-align: center;
  color: #fdfbff;
  text-shadow: 0 4px 4px #282828;
  -webkit-text-stroke: 1px #da4096;
}

.container {
  margin-top: 15vh;
  font-family: "Ubuntu", sans-serif;
}

.portfolio > .box {
  background: #20113a;
  border: 5px solid #da4096;
  border-radius: 15px;
  box-shadow: inset 0px 2px 3px rgba(54, 54, 54, 0.8);
}
</style>
