export const searchModule ={
namespaced:true,
state:()=>({
    selectedGenre: 'all',
    selectedDuration: 'all',
    selectedLanguage:'all',
    query:'',
    showSearch:true



}),
mutations:{

    setSelectedGenre(state, filter){
        state.selectedGenre=filter

    },
    setSelectedDuration(state, filter){
        state.selectedDuration=filter

    },
    setSelectedLanguage(state, filter){
        state.selectedLanguage=filter

    },

    setQuery(state, query){
        state.query = query
    },
    setShowSearch(state, showSearch){
        state.showSearch = showSearch
    },


},

getters:{
    getSelectedGenre(state){
        return state.selectedGenre
    },
    getSelectedDuration(state){
        return state.selectedDuration
    },
    getSelectedLanguage(state){
        return state.selectedLanguage
    },
    getQuery(state){
        return state.query
    },
    getShowSearch(state){
        return state.showSearch
    },


},









}