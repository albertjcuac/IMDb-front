import {createStore} from "vuex";
import {searchModule} from "@/store/search.module";
import {moviesModule} from "@/store/movies.module";

export const store=createStore({

modules:{
    search:searchModule,
    characters:moviesModule
}



})