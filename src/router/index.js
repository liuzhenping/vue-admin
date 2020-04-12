import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('../views/Home.vue')
            },

        ]
    },
    {
        path: '/article',
        component: Layout,
        name: 'Article',
        children: [
            {
                path: '',
                name: 'Article Index',
                component: () => import('../views/article/Index.vue')
            },
            {
                path: 'create',
                name: 'CreateArticle',
                component: () => import('../views/article/CreateArticle.vue')
            },
            {
                path: 'detail/:id',
                component: () => import('../views/article/ViewArticle.vue'),
                name: 'View Article'
            },
            {
                path: 'edit/:id',
                component: () => import('../views/article/EditArticle.vue'),
                name: 'Edit Article'
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
