export const moviesModule ={
namespaced:true,
state: ()=> ({
    movies: [],
    visibleMovies:[],
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
            return state.Movies
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
