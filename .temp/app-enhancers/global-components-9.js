import Vue from 'vue'
Vue.component("demo-1", () => import("D:\\workspace\\vuepress\\docs\\.vuepress\\components\\demo-1"))
Vue.component("diagram-markdown-slot-relationship", () => import("D:\\workspace\\vuepress\\docs\\.vuepress\\components\\diagram-markdown-slot-relationship"))
Vue.component("OtherComponent", () => import("D:\\workspace\\vuepress\\docs\\.vuepress\\components\\OtherComponent"))
Vue.component("svg-container", () => import("D:\\workspace\\vuepress\\docs\\.vuepress\\components\\svg-container"))
Vue.component("UpgradePath", () => import("D:\\workspace\\vuepress\\docs\\.vuepress\\components\\UpgradePath"))
Vue.component("Foo-Bar", () => import("D:\\workspace\\vuepress\\docs\\.vuepress\\components\\Foo\\Bar"))

Vue.component("CodeBlock", () => import("D:\\workspace\\vuepress\\node_modules\\@vuepress\\theme-default\\global-components\\CodeBlock"))
Vue.component("Badge", () => import("D:\\workspace\\vuepress\\node_modules\\@vuepress\\theme-default\\global-components\\Badge"))
Vue.component("CodeGroup", () => import("D:\\workspace\\vuepress\\node_modules\\@vuepress\\theme-default\\global-components\\CodeGroup"))


export default {}