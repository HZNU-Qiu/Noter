const { defaultTheme } = require('vuepress')
const { navbar } = require('./config/navbar')
// const {localTheme} = require('./theme/index.ts')
// const { path } = require('@vuepress/utils')
module.exports = {
    theme: defaultTheme({
        logo: '/img/island.png',
        navbar,
        sidebar: 'auto',
    }),
    port: 8088,
}