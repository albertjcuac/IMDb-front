export const searchModule ={
namespaced:true,
state:()=>({
    selectedGenre: 'all',
    selectedDuration: 'all',
    selectedMinScore:'all',
    query:'',
    showSearch:true,
    currentRoute:"",
    region:"",
    recentSearches:[],
    regions:[],




}),
actions:{
    async fetchRecentSearches({commit}){

        fetch("http://localhost:8080/search/recent")
            .then((data) => data.json())
            .then((data) => {
                commit('setRecentSearches', data);

                            });
    },
    async fetchRegions({commit}){

        fetch("http://localhost:8080/search/regions")
            .then((data) => data.json())
            .then((data) => {
                let regions=data.values.map((item) => item.value)
                commit('setRegions', regions);

            });
    }

},
mutations:{
    setRegion(state, region){
        state.region=region

    },
    setRegions(state, regions){
        state.regions=regions

    },
    setRecentSearches(state, query){
        state.recentSearches=query

    },


    setSelectedGenre(state, filter){
        state.selectedGenre=filter

    },
    setSelectedDuration(state, filter){
        state.selectedDuration=filter

    },
    setSelectedMinScore(state, filter){
        state.selectedMinScore=filter

    },

    setQuery(state, query){
        state.query = query
    },
    setShowSearch(state, showSearch){
        state.showSearch = showSearch
    },
    setCurrentRoute(state, route){
        state.currentRoute=route
    }


},

getters:{
    getRecentSearches(state){
        return state.recentSearches
    },
    getRegion(state){
        return state.region
    },
    getRegions(state){
        return state.regions
    },

    getSelectedGenre(state){
        return state.selectedGenre
    },
    getSelectedDuration(state){
        return state.selectedDuration
    },
    getSelectedMinScore(state){
        return state.selectedMinScore
    },
    getQuery(state){
        return state.query
    },
    getShowSearch(state){
        return state.showSearch
    },
    getCurrentRoute(state){
        return state.currentRoute
    }



},









}