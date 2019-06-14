
export default {
  mode: 'universal',
    /**
* Gitlab
*/
router: {
   base: '',
},
generate: {
   dir: 'public',
},
  /*
  ** Headers of the page
  */
  head: {
    title: 'Portfolio | Snipey.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A humble software developer portfolio' },
      { hid: 'keywords', name: 'keywords', content: 'vuejs, nuxt, javascript, hire, development, software, projects, open source, php, full stack' }
    ],
    link: [
      /*{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },*/
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono|Press+Start+2P&display=swap'}
    ],
    script: [
      { src: 'https://use.fontawesome.com/c90a54fd5c.js' },
      { src: 'https://code.jquery.com/jquery-3.4.1.min.js', integrity: 'sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=', crossorigin: 'anonymous'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#b600ff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/font-awesome',
    '@nuxtjs/svg-sprite',
  ],
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
    extend(config, ctx) {
    }
  }
}
