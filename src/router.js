import {createRouter, createWebHistory} from "vue-router";



import app from "@/pages/MainPage.vue";
import similar from "@/pages/Similar.vue";
import countryFlags from "@/pages/CountryFlags.vue";
import CountryDetails from "@/pages/CountryDetails.vue";
import similarDetails from "@/pages/SimilarDetails.vue";
import saved from "@/pages/Saved.vue";
const routes = [
    {
        path: '/',
        component: app
    },

    {
        path: '/country',
        component: countryFlags
    },
    {
        path: '/similar',
        component: similar
    },
    {   path: '/country/:iso/:name',
        component: CountryDetails
    },
    {
        path: '/similar/:name',
        component: similarDetails

    },
    {
        path:'/saved',
        component: saved
    }


]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
