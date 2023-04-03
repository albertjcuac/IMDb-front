import {createRouter, createWebHistory} from "vue-router";



import app from "@/MainPage.vue";
import app2 from "@/prueba1.vue";
import similar from "@/Similar.vue";
import countryFlags from "@/CountryFlags.vue";
import CountryDetails from "@/components/CountryDetails.vue";
import similarDetails from "@/SimilarDetails.vue";
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

    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
