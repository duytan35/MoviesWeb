import header_v from "./header.js";
import nav_v from "./nav.js";
import movies_new_v from "./movies_new.js";
import movies_popular_v from "./most_popular_movies.js";
import movies_top_rating_v from "./top_rating.js";
import footer_v from "./footer.js";
import store from "./store.js";
import movie_new_spe from "./movie_new_spe.js";
import movie_popular_spe from "./movie_popular_spe.js";
import movie_top_rating_spe from "./movie_top_rating_spe.js";
import movies_search from "./movies_search.js";
import movie_search_spe from "./search_movie_spe.js";
export default {
    data() {
        return {
            store,
            currentTab_new: movies_new_v,
            currentTab_popular: movies_popular_v,
            currentTab_top_rating: movies_top_rating_v,
            currentTab_search: movies_search,
        };
    },
    components: {
        header_v,
        nav_v,
        movies_new_v,
        movies_popular_v,
        movies_top_rating_v,
        footer_v,
        movie_new_spe,
        movie_popular_spe,
        movie_top_rating_spe,
        movies_search,
        movie_search_spe,
    },
    methods: {
        get_color(number) {
            if (store.dark_mode == true) {
                if (number == 0) {
                    return `background-color: #212529 !important; color: white !important;`;
                } else return `background-color: #141414 !important; color: white !important;`;
            } else {
                if (number == 0) {
                    return `background-color: #F8F9FA !important; color: black !important;`;
                } else return `background-color: #CCCCCC !important; color: black !important;`;
            }
        },
        change_color() {
            store.dark_mode = !store.dark_mode;
        },
        select_new(n) {
            store.current_new = store.movies_new[n];
            this.currentTab_new = movie_new_spe;
        },
        select_popular(n) {
            store.current_popular = store.movies_popular[n];
            this.currentTab_popular = movie_popular_spe;
        },
        select_top_rating(n) {
            store.current_top_rating = store.movies_top_rating[n];
            this.currentTab_top_rating = movie_top_rating_spe;
            console.log(store.current_top_rating);
        },
        async select_search(id) {
            this.currentTab_search = movie_search_spe;
            const respone = await fetch(
                "https://imdb-api.com/en/API/Title/" + store.api_key + "/" + id,
                store.requestOptions
            );
            const results = await respone.json();
            store.current_search = results;
            console.log(store.current_search);
        },
        back_home() {
            store.movies_new = [];
            store.movies_popular = [];
            store.movies_top_rating = [];
            this.currentTab_new = movies_new_v;
            this.currentTab_popular = movies_popular_v;
            this.currentTab_top_rating = movies_top_rating_v;
            setTimeout(() => {
                movies_new_v.methods.load();
            }, 100);
            setTimeout(() => {
                movies_popular_v.methods.load();
            }, 200);
            setTimeout(() => {
                movies_top_rating_v.methods.load();
            }, 300);
            store.is_search = false;
        },
        async search(data_search) {
            store.is_search = true;
            const respone = await fetch(
                "https://imdb-api.com/en/API/SearchMovie/" + store.api_key + "/" + data_search,
                store.requestOptions
            );
            const results = await respone.json();
            store.movies_search = results.results;
        },
    },
    template: `
    <div class="container" :style=get_color(1)>
        <div class="row">
            <div class="col-12" >
                <header_v :style=get_color(0) @dark_mode='change_color'></header_v>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <nav_v :style=get_color(0) @home='back_home' @search='search'></nav_v> 
            </div>
        </div>
        <div class="row" v-if=!store.is_search>
            <div class="col-12">
                <component :is="currentTab_new" @select_new='select_new'></component>    
            </div>
        </div>
        <div class="row" v-if=!store.is_search>
            <div class="col-12">
                <component :is="currentTab_popular" @select_popular='select_popular'></component>     
            </div>
        </div>
        <div class="row" v-if=!store.is_search>
            <div class="col-12">
                <component :is="currentTab_top_rating" @select_top_rating='select_top_rating'></component>   
            </div>
        </div>
        <div class="row" v-if=store.is_search>
            <div class="col-12">
                <component :is="currentTab_search" @select_search='select_search'></component> 
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <footer_v :style=get_color(0)></footer_v>      
            </div>
        </div>
    </div>
    `,
};
