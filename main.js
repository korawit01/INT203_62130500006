const app = {

    data() {

        return {

            msg: 'Hello, Vue3'

        }

    }

}

Vue.createApp(app).mount('#app')

const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('required', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`required${separator}${className}`)}:required`
        })
      })
    })
  ]
}