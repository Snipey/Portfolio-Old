<template>
  <div class="social-div">
    <span>
      <a class="social" href="https://github.com/Snipey">
        <fa class="icon" :icon="faGithub" />
      </a>
    </span>
    <span>
      <a class="social" href="https://gitlab.com/Snipey">
        <fa class="icon" :icon="faGitlab" />
      </a>
    </span>
    <span>
      <a class="social" href="https://twitter.com/SnipeyDev">
        <fa class="icon" :icon="faTwitter" />
      </a>
    </span>
    <span>
      <a class="social" href="https://discord.gg/T5fZ8ys">
        <fa class="icon" :icon="faDiscord" />
      </a>
    </span>
    <span>
      <a class="social" href="mailto:contact@snipey.dev">
        <fa class="icon" :icon="faEnvelope" />
      </a>
    </span>
    <span>
      <a class="social" href="https://notify.me/snipey">
        <svg-icon class="social-svg" width="45px" height="45px" name="notify" />
      </a>
    </span>
  </div>
</template>

<script>
import {
  faDiscord,
  faTwitter,
  faGitlab,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default {
  computed: {
    faGitlab() {
      return faGitlab;
    },
    faGithub() {
      return faGithub;
    },
    faTwitter() {
      return faTwitter;
    },
    faDiscord() {
      return faDiscord;
    },
    faEnvelope() {
      return faEnvelope;
    }
  }
};
</script>

<style scoped>
.social-div {
  margin: 5px;
  text-align: center;
}
.social {
  color: #fdfbff;
  padding: 5px;
}
.social-svg {
  fill: #fdfbff;
}
.social-svg:hover {
  fill: #da4096;
}
.icon {
  width: 45px;
  height: 45px;
}
a:hover {
  color: #da4096;
}
</style>
