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
    regionName:""




}),
mutations:{
    setRegion(state, region){
        state.region=region

    },
    setRegionName(state, region){
        state.regionName=region

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

    getRegion(state){
        return state.region
    },
    getRegionName(state){
        return state.regionName
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