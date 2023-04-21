import {createRouter, createWebHistory} from "vue-router";



import app from "@/pages/MainPage.vue";
import similar from "@/pages/Similar.vue";
import countryFlags from "@/pages/CountryFlags.vue";
import CountryDetails from "@/pages/CountryDetails.vue";
import similarDetails from "@/pages/SimilarDetails.vue";
import saved from "@/pages/Saved.vue";
import mostRated from "@/pages/MostRated.vue";
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
    {   path: '/country/:iso',
        component: CountryDetails
    },
    {
        path: '/similar/:name',
        component: similarDetails

    },
    {
        path:'/saved',
        component: saved
    },
    {
        path:'/most-rated',
        component: mostRated
    }


]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
