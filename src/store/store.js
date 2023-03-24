import {createStore} from "vuex";
import {searchModule} from "@/store/search.module";
import {charactersModule} from "@/store/characters.module";

export const store=createStore({

modules:{
    search:searchModule,
    characters:charactersModule
}



})