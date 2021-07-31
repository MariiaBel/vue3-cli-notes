import AboutPage from '../pages/About.vue'
import HomePage from '../pages/Home.vue'
import Err404Page from '../pages/404.vue'
import vueConfig from "@/../vue.config"

export const routes = [
    {
        path: vueConfig.publicPath,
        name: 'home',
        component: HomePage
    },
    {
        path: `${vueConfig.publicPath}404`,
        name: '404',
        component: Err404Page
    },
    {
        path: `${vueConfig.publicPath}about`,
        name: 'about',
        component: AboutPage
    },
    {
        path: `${vueConfig.publicPath}:CatchAll(.*)*`,
        redirect: { name: '404' }
    }
]