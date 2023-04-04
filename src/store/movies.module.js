export const moviesModule ={
    namespaced:true,
    state: ()=> ({
        movies: [{
            "name": "Clerks",
            "image": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/206a5d19370f319b25158a5e33addbe9b3bed0b0122e993b7ba27786b0ac0498._V_SX600_.jpg",
            "year":"2001",
            "director": "Kevin Smith"

        },
            {
                "name": "Clerks",
                "image": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/206a5d19370f319b25158a5e33addbe9b3bed0b0122e993b7ba27786b0ac0498._V_SX600_.jpg",
                "year":"2001",
                "director": "Kevin Smith"

            },
            {
                "name": "Clerks",
                "image": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/206a5d19370f319b25158a5e33addbe9b3bed0b0122e993b7ba27786b0ac0498._V_SX600_.jpg",
                "year":"2001",
                "director": "Kevin Smith"

            },
            {
                "name": "Clerks",
                "image": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/206a5d19370f319b25158a5e33addbe9b3bed0b0122e993b7ba27786b0ac0498._V_SX600_.jpg",
                "year":"2001",
                "director": "Kevin Smith"

            },
            {
                "name": "Clerks",
                "image": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/206a5d19370f319b25158a5e33addbe9b3bed0b0122e993b7ba27786b0ac0498._V_SX600_.jpg",
                "year":"2001",
                "director": "Kevin Smith"

            },
            {
                "name": "Clerks",
                "image": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/206a5d19370f319b25158a5e33addbe9b3bed0b0122e993b7ba27786b0ac0498._V_SX600_.jpg",
                "year":"2001",
                "director": "Kevin Smith"

            },
            {
                "name": "Clerks",
                "image": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/206a5d19370f319b25158a5e33addbe9b3bed0b0122e993b7ba27786b0ac0498._V_SX600_.jpg",
                "year":"2001",
                "director": "Kevin Smith"

            },
            {
                "name": "Clerks",
                "image": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/206a5d19370f319b25158a5e33addbe9b3bed0b0122e993b7ba27786b0ac0498._V_SX600_.jpg",
                "year":"2001",
                "director": "Kevin Smith"

            },
            {
                "name": "Clerks",
                "image": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/206a5d19370f319b25158a5e33addbe9b3bed0b0122e993b7ba27786b0ac0498._V_SX600_.jpg",
                "year":"2001",
                "director": "Kevin Smith"

            },
            { "name": "Ali G In Da House",
                "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
                "year":"2002",
                "director": "Kevin Smith"


            },
            { "name": "Ali G In Da House",
                "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
                "year":"2002",
                "director": "Kevin Smith"
            },
            { "name": "Ali G In Da House",
                "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
                "year":"2002",
                "director": "Kevin Smith"
            },
            { "name": "Ali G In Da House",
                "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
                "year":"2002",
                "director": "Kevin Smith"
            },
            { "name": "Ali G In Da House",
                "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
                "year":"2002",
                "director": "Kevin Smith"
            },
            { "name": "Ali G In Da House",
                "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
                "year":"2002",

            },
            { "name": "Ali G In Da House",
                "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
                "year":"2002",

            },
            { "name": "Ali G In Da House",
                "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
                "year":"2002",

            },
            { "name": "Ali G In Da House",
                "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
                "year":"2002",

            },
            { "name": "Ali G In Da House",
                "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
                "year":"2002",

            },
            { "name": "Ali G In Da House",
                "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
                "year":"2002",

            },




        ],
        visibleMovies:[],
        savedMovies:[],
        currentPage : 1,
        totalPages:0,

    }),


    actions:{
        async fetchAllMovies({commit,state},url){

            fetch(url+'&page='+state.currentPage)
                .then(response => response.json())
                .then(data => {

                    commit('setTotalPages',data.info.pages);
                    commit('setVisibleMovies',data.results);
                    commit('setMovies',data.results);

                });

        },
        async fetchFilteredMovies({commit,state,rootGetters,},url){

            fetch(url + `&status=` + rootGetters['search/getSelectedFilter']+'&page='+state.currentPage)
                .then(response => response.json())
                .then(data => {
                    commit('setTotalPages',data.info.pages);
                    commit('setVisibleMovies',data.results);

                });

        },
        decreasePage({commit,state}){
            let page=state.currentPage-1;
            commit('setCurrentPage',page)

        },

        increasePage({commit,state}){
            let page=state.currentPage+1;
            commit('setCurrentPage',page)


        },
    },
    mutations:{
        setMovies(state, Movies){
            state.Movies=Movies

        },
        setSavedMovies(state, Movies){
            state.savedMovies=Movies

        },
        setVisibleMovies(state, visibleChar){
            state.visibleMovies = visibleChar
        },
        setCurrentPage(state, currentPage){
            state.currentPage = currentPage
        },
        setTotalPages(state, totalPages){
            state.totalPages = totalPages
        },
    },

    getters:{
        getMovies(state){
            return state.movies
        },
        getSavedMovies(state){
            return state.savedMovies
        },
        getVisibleMovies(state){
            return state.visibleMovies
        },

        getCurrentPage(state){
            return state.currentPage
        },
        getTotalPages(state){
            return state.totalPages
        }
    }


}