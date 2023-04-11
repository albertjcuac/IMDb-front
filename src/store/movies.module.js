export const moviesModule ={
    namespaced:true,
    state: ()=> ({
        movies: [],
        visibleMovies:[],
        savedMovies:[],
        currentPage : 1,
        totalPages:0,
        url:'http://localhost:8080/search'

    }),


    actions:{
        async fetchAllMovies({commit}){

            fetch("http://localhost:8080/search")
                .then(response => response.json())
                .then(data => {
                    commit('setMovies',data.hits);

                });

        },
        async fetchQueryMovies({commit,state,rootGetters,}){

            fetch("http://localhost:8080/search/terms?"+'values='+rootGetters['search/getQuery'].trim().toLowerCase()+'&field=primaryTitle' )
                .then(response => response.json())
                .then(data => {
                    commit('setMovies',data);

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
        setMovies(state, movies){
            state.movies=movies

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