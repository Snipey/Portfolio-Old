<template>
    <div class="container">
        <div class="modal" id="projectsModal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis impedit ipsa minima neque officiis provident reiciendis suscipit veritatis vero! Amet asperiores, atque aut consequuntur debitis ducimus eius eos fugiat in iure maxime modi non officia praesentium quam quas similique voluptatibus! Aut cumque delectus eos excepturi id nemo non nulla recusandae sequi ut? A consequatur dolore ea eligendi et labore modi numquam porro suscipit totam. Ab, architecto consectetur cumque dolorem ea explicabo, fugiat illum ipsam modi nam nobis quidem rem rerum sint temporibus. Architecto blanditiis cum doloremque eaque inventore laborum, nostrum, omnis possimus quidem quisquam rem tenetur, veritatis vero? Corporis?</p>
            </div>
            <button class="modal-close is-large" aria-label="close"></button>
        </div>
        <div class="columns">
            <div class="column">
                <div class="logo">< Snipey /></div>
                <div class="sub-logo">Full Stack Developer</div>
            </div>
        </div>
        <div class="box gradient-border">
            <div class="columns is-centered">
                <div class="column is-four-fifths port-text">
                    <p>
                        My name is Stephen and I am a developer of sorts. I have made a few projects and currently am just working on hobby projects for me to learn a few new web technologies.
                    </p>
<!--                    <hr/>
                    <p>
                        Skills:<br>
                        > Databases
                            <progress class="progress is-success" value="60" max="100">Backend</progress>
                        > Javascript
                            <progress class="progress is-warning" value="50" max="100">Javascript</progress>
                        > PHP
                            <progress class="progress is-success" value="65" max="100">PHP</progress>
                        > GIT
                            <progress class="progress is-success" value="75" max="100">GIT</progress>
                    </p>-->
                    <br>
                    <div class="columns">
                        <div class="column">
                            <a href="https://gitlab.com/users/Snipey/projects" class="button is-fullwidth port-text-inv modal-button" data-target="#projectsModal" onclick="projectModal()">Projects</a>
                        </div>
                    </div>
                </div>
                <div class="column social">
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
        }
    }

    function projectModal() {
        document.querySelectorAll('.modal-button').forEach(function(el) {
            el.addEventListener('click', function() {
                let target = document.querySelector(el.getAttribute('data-target'));

                target.classList.add('is-active');

                target.querySelector('.modal-close').addEventListener('click',   function() {
                    target.classList.remove('is-active');
                });
            });
        });
    }
</script>
<style>
    ::selection {
        background: #FBC93F; /* WebKit/Blink Browsers */
    }
    ::-moz-selection {
        background: #FBC93F; /* Gecko Browsers */
    }
    .port-text {
        color: #fdfbff;
        font-family: 'Press Start 2P', cursive;
    }
    .social {
        position: relative;
    }
    .logo {
        font-size: 46pt;
        font-weight: bolder;
        text-align: center;
        color: #067CFA;
        -webkit-text-stroke: 1px #FBC93F;
        text-shadow: 0px 4px 4px #282828;

    }
    .sub-logo {
        font-size: 24pt;
        text-align: center;
        color: #067CFA;
        -webkit-text-stroke: 1px #FBC93F;
        text-shadow: 0px 4px 4px #282828;
    }
    .container {
        margin-top: 25vh;
        width: 50vw;
        font-family: 'Ubuntu', sans-serif;
    }

    .gradient-border {
        --borderWidth: 6px;
        background: #20113A;
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
        background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab,
        #5073b8, #1098ad, #07b39b, #6fba82);
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
