<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="logo">< Snipey /></div>
                <div class="sub-logo">Full Stack Developer</div>
            </div>
        </div>
        <div class="box gradient-border">
            <div class="columns">
                <div class="column is-four-fifths port-text">
                    <p>
                        My name is Stephen and I am a developer of sorts. I have made a few projects and currently am just working on hobby projects for me to learn a few new web technologies.
                    </p>
                    <hr/>
                    <p>
                        Skills:<br>
                        > Backend
                            <progress class="progress" value="60" max="100">Backend</progress>
                        > Javascript
                            <progress class="progress is-warning" value="50" max="100">Javascript</progress>
                        > PHP
                            <progress class="progress is-success" value="65" max="100">PHP</progress>
                        > GIT
                            <progress class="progress is-success" value="75" max="100">GIT</progress>
                    </p>
                    <br>
                    <div class="columns">
                        <div class="column">
                            <a class="button is-fullwidth" onclick="projectModal()">Projects</a>
                        </div>
                    </div>
                </div>
                <div class="column social">
                    <Socials/>
                    <div class="modal" id="projectModal">
                        <div class="modal-background"></div>
                        <div class="modal-card">
                            <header class="modal-card-head">
                                <p class="modal-card-title">Modal title</p>
                                <button class="delete" aria-label="close"></button>
                            </header>
                            <section class="modal-card-body">
                                <!-- Content ... -->
                            </section>
                            <footer class="modal-card-foot">
                                <button class="button is-success">Save changes</button>
                                <button class="button">Cancel</button>
                            </footer>
                        </div>
                    </div>
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
        }
    }
    function projectModal() {
        let projects = document.getElementById("projectModal");
        projects.classList.add("is-active");
    }
</script>
<style>
    .port-text {
        color: #fdfbff;
        font-family: 'Press Start 2P', cursive;
    }
    .social {
        position: relative;
    }
    .logo {
        font-size: 46pt;
        text-align: center;
        color: white;
    }
    .sub-logo {
        text-align: center;
        color: white;
    }
    .container {
        margin-top: 15vh;
        width: 50vw;
        font-family: 'Ubuntu', sans-serif;
    }

    .gradient-border {
        --borderWidth: 3px;
        background: #000000;
        position: relative;
        border-radius: var(--borderWidth);
    }

    .gradient-border:after {
        content: '';
        position: absolute;
        top: calc(-1 * var(--borderWidth));
        left: calc(-1 * var(--borderWidth));
        height: calc(100% + var(--borderWidth) * 2);
        width: calc(100% + var(--borderWidth) * 2);
        background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
        border-radius: calc(2 * var(--borderWidth));
        z-index: -1;
        animation: animatedgradient 3s ease alternate infinite;
        background-size: 300% 300%;
    }


    @keyframes animatedgradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>
