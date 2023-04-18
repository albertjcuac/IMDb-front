export const moviesModule ={
    namespaced:true,
    state: ()=> ({
        movies: [],
        savedMovies:[],
        url:'http://localhost:8080/search'

    }),


    actions:{
        async fetchAllMovies({commit,rootGetters}){
            let url="http://localhost:8080/search"
            fetch( url)
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

        },
        async fetchQueryMovies({ commit, state, rootGetters }) {

           let query="http://localhost:8080/search"
            if(rootGetters['search/getQuery']!==""){
                 query += "?title=" + rootGetters['search/getQuery'].trim().toLowerCase()+"&maxNHits=20";
            }


            let duration =rootGetters['search/getSelectedDuration'];
            let genre = rootGetters['search/getSelectedGenre'];
            let minScore =  rootGetters['search/getSelectedMinScore'];
        if(rootGetters['search/getQuery']!==""){

            if(duration!=="all"){

                switch(duration) {
                    case "under 1h":
                        query+="&maxMinutes="+60
                        break;
                    case "1h-2h":
                        query+="&minMinutes="+60
                        query+="&maxMinutes="+120
                        break;
                    case "over 2h":
                        query+="&minMinutes="+120
                        break;

                }

            }

            if(genre!=="all")  {
                query+= "&genres="+genre

            }
            if(minScore!=="all"){
                query+="&minScore="+minScore;
            }
        }
        else{
            let hasFilter = false
            if (duration !== "all") {
                switch (duration) {
                    case "under 1h":
                        query += hasFilter ? "&maxMinutes=" + 60 : "?maxMinutes=" + 60; // Se verifica si hay un filtro previo
                        hasFilter = true;
                        break;
                    case "1h-2h":
                        query += hasFilter ? "&minMinutes=" + 60 + "&maxMinutes=" + 120 : "?minMinutes=" + 60 + "&maxMinutes=" + 120;
                        hasFilter = true;
                        break;
                    case "over 2h":
                        query += hasFilter ? "&minMinutes=" + 120 : "?minMinutes=" + 120;
                        hasFilter = true;
                        break;
                }
            }

            if (genre !== "all") {
                query += hasFilter ? "&genres=" + genre : "?genres=" + genre;
                hasFilter = true;
            }

            if (minScore !== "all") {
                query += hasFilter ? "&minScore=" + minScore : "?minScore=" + minScore;
            }
            if(hasFilter===true){
                query += "&maxNHits=20";
            }else {

                query += "?maxNHits=20";
            }

        }

            fetch(query)
                .then((data) => data.json())
                .then((data) => {
                    let promises = [];
                    for (let film in data) {
                        let imageUrl = 'https://www.omdbapi.com/?apikey=b3fb6cc1&t=' + data[film].primaryTitle;
                        let promise = fetch(imageUrl)
                            .then((result) => result.json())
                            .then((result) => {
                                data[film].imageUrl = result.Poster;
                                data[film].director = result.Director;
                                data[film].writer = result.Writer;
                                data[film].actors = result.Actors;
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

    },

    getters:{
        getMovies(state){
            return state.movies
        },
        getSavedMovies(state){
            return state.savedMovies
        },


    }


}