export default {
  mode: "universal",
  /**
   * Gitlab
   */
  router: {
    base: ""
  },
  generate: {
    dir: "public"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Snipey | Developer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "author",
        name: "author",
        content: "Stephen Freerking"
      },
      {
        hid: "description",
        name: "description",
        content: "Fullstack Developer - Node, Javascript, Vue"
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "vuejs, nuxt, javascript, hire, development, software, projects, open source, full stack, Snipey"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Bitter&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css",
        integrity:
          "sha384-OHBBOqpYHNsIqQy8hL1U+8OXf9hH6QRxi0+EODezv82DfnZoV7qoHAZDwMwEJvSw",
        crossorigin: "anonymous"
      }
    ],
    script: []
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#b600ff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    "@nuxtjs/bulma",
    "@nuxtjs/svg-sprite",
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          //import whole set
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          }
        ]
      }
    ]
  ],
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/pro-regular-svg-icons",
        icons: ["faAdjust"]
      },
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"]
      }
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
