<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbar" class="navbar-menu">
            <div class="navbar-end">
                <nuxt-link to="/" class="navbar-item nav-font">Home</nuxt-link>
                <nuxt-link to="/about" class="navbar-item nav-font">About</nuxt-link>
                <a class="navbar-item nav-font" href="https://gitlab.com/snipey">
                    Gitlab
                </a>
                <a class="navbar-item nav-font" href="https://github.com/snipey">
                    Github
                </a>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Cantarell&display=swap');
    .nav-font {
        font-weight: bolder;
        color: #fdfbff;
        font-family: 'Cantarell', sans-serif;
    }
    .navbar {
        margin-right: 20em;
        margin-left: 20em;
        background-color: transparent;
    }
</style>