<template>
  <div class="modal animate fadeIn" id="projectModal">
    <div class="modal-background" v-on:click="projectModal"></div>
    <div class="modal-card animated fadeIn">
      <div class="project port-text">
        <button
          class="modal-close is-large"
          aria-label="close"
          v-on:click="projectModal"
        />
        <div class="project-head">
          <h1>
            > <a href="https://gitlab.com/thesporkening/sporkbot">SporkBot</a>
          </h1>
        </div>
        <div class="project-body">
          <p>A bot for "The Sporkening" gaming community</p>
        </div>
        <hr />
        <div class="project-head">
          <h1>> <a href="https://hockeyhq.co">Hockey Headquarters</a></h1>
        </div>
        <div class="project-body">
          <p>A simulation game for fantasy hockey.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    projectModal() {
      let modal = document.getElementById("projectModal");
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
.project-head {
  font-size: 15pt;
  margin-bottom: 5px;
}
a {
  color: #fdfbff;
}
a:hover {
  color: #da4096;
}
.modal-card {
  border: 5px solid #da4096;
  border-radius: 15px;
  background: #1b1b1b;
  box-shadow: 0 0 8px 10px #0d070f;
  padding: 15px;
}
</style>
