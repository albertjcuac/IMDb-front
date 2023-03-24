import {createRouter, createWebHistory} from "vue-router";



import app from "@/MainPage.vue";
import app2 from "@/App2.vue";

const routes = [
    {
        path: '/',
        component: app
    },

    {
        path: '/country',
        component: app2
    },

]

export const router = createRouter({
    history: createWebHistory(),
    routes
})