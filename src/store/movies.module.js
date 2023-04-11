export const moviesModule ={
    namespaced:true,
    state: ()=> ({
        movies: [],
        visibleMovies:[],
        savedMovies:[],
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
        async fetchQueryMovies({ commit, state, rootGetters }) {
            let url = "http://localhost:8080/search/terms";
            let query = "?values=" + rootGetters['search/getQuery'].trim().toLowerCase();
            let field = "&field=primaryTitle";

            fetch(url + query + field)
                .then((data) => data.json())
                .then((data) => {
                    let promises = [];
                    for (let film in data) {
                        let imageUrl = 'https://www.omdbapi.com/?apikey=b3fb6cc1&t=' + data[film].primaryTitle;
                        let promise = fetch(imageUrl)
                            .then((result) => result.json())
                            .then((result) => {
                                data[film].imageUrl = result.Poster;
                            });
                        promises.push(promise);
                    }
                    Promise.all(promises).then(() => {
                        commit('setMovies', data);
                        console.log(data);
                    });
                });
        }



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