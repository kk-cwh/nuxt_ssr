const axios = require('axios');
module.exports = {
  generate: {
    routes: function () {
      return axios.get('https://blog.zhangyake.site/api/_articles')
      .then((res) => {
        return res.data.data.articles.list.map((article) => {
          return '/blog/article/' + article.id
        })
      })
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt_ssr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://raw.githubusercontent.com/daneden/animate.css/master/animate.css' }

    ]
  },
  css:['~assets/css/normalize.css','~assets/main.css','~assets/css/font.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {

    vendor: ['vue-aplayer'],
    loaders:[
      {
        test:/\.(png|jpe?g|gif|svg)$/,
        loader:"url-loader",
        query:{
          limit:10000,
          name:'img/[name].[hash].[ext]'
        }
      }
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
