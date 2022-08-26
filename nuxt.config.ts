import { defineNuxtConfig } from 'nuxt'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
const lifecycle = process.env.npm_lifecycle_event;

export default defineNuxtConfig({
    head: {
        meta: [
          { hid: 'description', name: 'description', content: '' },
          { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
          {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: true,
          },
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet',
          },
        ],
    },
    // css
    css: ['~/assets/css/index.css', '~/assets/scss/index.scss', '~/assets/icon/iconfont.css', 'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css'],

    // build
    build: {
        transpile: lifecycle === 'build' || lifecycle === 'generate' ? ['element-plus', 'echarts'] : ['echarts'],
    },

    typescript: {
        strict: true,
        shim: false,
    },

    buildModules: [
        // '@unocss/nuxt',
        // '@vueuse/nuxt',
        // '@pinia/nuxt',
        'pinia-nuxt-persist',
        '@pinia/nuxt',
        'nuxt-ui'
    ],

    unocss: {
        // attributify: true,
        // icons: true,
        // components: true,
        // shortcuts: {
        //     // Customize and override
        //     'n-button-base': 'bg-blue dark:bg-black',
        //     'aaa': 'bg-blue',
        //     // backTop
        //     // 'n-backTop-base': 'fixed right-20 bottom-20'
        // }
    },

    // auto import components
    // components: true,

    // // vueuse
    // vueuse: {
    //     ssrHandlers: true,
    // },

    // vite: {
    //     // 日志级别
    //     logLevel: "info",
    //     // 按需导入(自动导入)
    //     plugins: [
    //         AutoImport({
    //           resolvers: [ElementPlusResolver()],
    //         }),
    //         Components({
    //           resolvers: [ElementPlusResolver()],
    //         }),
    //     ],
    // },

    // unocss: {
    //     attributify: true,
    //     icons: true,
    //     components: false,
    //     shortcuts: [
    //         //   ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    //         // {
    //         //     btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    //         // },
    //     ],
    // },
})
