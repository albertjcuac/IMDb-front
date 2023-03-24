export const searchModule ={
namespaced:true,
state:()=>({
    selectedFilter: 'all',
    query:'',



}),
mutations:{

    setSelectedFilter(state, filter){
        state.selectedFilter=filter

    },

    setQuery(state, query){
        state.query = query
    },


},

getters:{
    getSelectedFilter(state){
        return state.selectedFilter
    },

    getQuery(state){
        return state.query
    },


},









}