export const charactersModule ={
namespaced:true,
state: ()=> ({
    characters: [],
    visibleCharacters:[],
    currentPage : 1,
    totalPages:0,

}),


actions:{
    async fetchAllCharacters({commit,state},url){

        fetch(url+'&page='+state.currentPage)
            .then(response => response.json())
            .then(data => {

                commit('setTotalPages',data.info.pages);
                commit('setVisibleCharacters',data.results);
                commit('setCharacters',data.results);

            });

    },
    async fetchFilteredCharacters({commit,state,rootGetters,},url){

        fetch(url + `&status=` + rootGetters['search/getSelectedFilter']+'&page='+state.currentPage)
            .then(response => response.json())
            .then(data => {
                commit('setTotalPages',data.info.pages);
                commit('setVisibleCharacters',data.results);

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
        setCharacters(state, characters){
            state.characters=characters

        },
        setVisibleCharacters(state, visibleChar){
            state.visibleCharacters = visibleChar
        },
        setCurrentPage(state, currentPage){
            state.currentPage = currentPage
        },
        setTotalPages(state, totalPages){
            state.totalPages = totalPages
        },
    },

getters:{
        getCharacters(state){
            return state.characters
        },
        getVisibleCharacters(state){
            return state.visibleCharacters
        },

        getCurrentPage(state){
            return state.currentPage
        },
        getTotalPages(state){
            return state.totalPages
        }
    }


}
