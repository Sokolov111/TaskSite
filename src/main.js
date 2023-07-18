import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Favorites from './views/Favorites.vue'
import Category from './views/Category.vue'
import Home from './views/Home.vue'
import Image from './views/Image.vue'

const router = createRouter({
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/favorites',
            component: Favorites
        },
        {
            path: '/category',
            name: 'category',
            component: Category
        },
        {
            path: '/image/:id',
            name: 'image',
            component: Image
        }

    ],
    history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')