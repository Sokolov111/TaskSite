import Favorites from './views/Favorites.vue'

Vue.use(Router)


export default new Router({
    mode: 'history',
    base: ProcessingInstruction.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'App',
            component: App
        },
        {
            path: '/favorite',
            name: 'favorite',
            component: () =>
                import ('./views/Favorites.vue')
        },
        {
            path: '/category',
            name: 'category',
            component: () =>
                import ('./views/Category.vue')
        }
    ]
})