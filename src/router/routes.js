import AboutPage from '../pages/About.vue'
import HomePage from '../pages/Home.vue'
import Err404Page from '../pages/404.vue'
import {site} from '@/_config'

export const routes = [
    {
        path: site.home,
        name: 'home',
        component: HomePage
    },
    {
        path: `${site.home}404`,
        name: '404',
        component: Err404Page
    },
    {
        path: `${site.home}about`,
        name: 'about',
        component: AboutPage
    },
    {
        path: `${site.home}:CatchAll(.*)*`,
        redirect: { name: '404' }
    }
]