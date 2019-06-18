<template>
    <div class="container">
        <div class="modal" id="projectModal">
            <div class="modal-background animate fadeIn"></div>
            <div class="modal-card animated fadeInUp">
                <div class="project port-text">
                    <div class="project-head">
                        <h1>> <a href="https://gitlab.com/thesporkening/sporkbot">SporkBot</a></h1>
                    </div>
                    <div class="project-body">
                        <p>A bot for "The Sporkening" gaming community</p>
                    </div>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" v-on:click="projectModal"></button>
        </div>
        <div class="columns animated fadeInUpBig">
            <div class="column">
                <div class="logo">< Snipey /></div>
                <div class="sub-logo">Full Stack Developer</div>
            </div>
        </div>
        <div class="box animated fadeInUpBig">
            <div class="columns is-centered">
                <div class="column is-fullwidth port-text">
                    <p>
                        My name is Stephen and I am a developer of sorts. I have made a few projects and currently am
                        just working on hobby projects for me to learn a few new web technologies.
                    </p>
                    <br>
                    <div class="columns">
                        <div class="column">
                            <a class="button is-fullwidth port-text-inv modal-button" data-target="#projectModal"
                               v-on:click="projectModal">Projects</a>
                        </div>
                    </div>
                </div>
                <div class="social">
                    <Socials/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Socials from '~/components/Socials.vue'

    export default {
        components: {
            Socials
        },
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
    }
</script>
<style scoped>
    .modal-background {
        color: rgba(0, 0, 0, 0.27);
        height: 100%;
    }
    .project-head {
        font-size: 15pt;
        margin-bottom: 5px;
    }
    .project > a {
        color: #fdfbff;
    }
    .project > a:hover {
        color: #DA4096;
    }
    .modal-card {
        border: 5px solid #DA4096;
        border-radius: 15px;
        background: #1b1b1b;
        box-shadow: 5px 5px 2px 2px #0d070f;
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
        font-family: 'Press Start 2P', cursive;
    }

    .logo {
        font-size: 46pt;
        font-weight: bolder;
        text-align: center;
        color: #521acf;
        text-shadow: 0 4px 4px #282828;
        -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
    }

    .sub-logo {
        font-size: 24pt;
        text-align: center;
        color: #511ac4;
        text-shadow: 0 4px 4px #282828;
        -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
    }

    .container {
        margin-top: 25vh;
        width: 50vw;
        font-family: 'Ubuntu', sans-serif;
    }

    .container > .box {
        background: #20113A;
        border: 5px solid #DA4096;
        border-radius: 15px;
        box-shadow: 0 0 8px 10px #0d070f;
    }
</style>
