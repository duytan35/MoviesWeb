import store from "./store.js";
export default {
    data() {
        return {
            page_cur: 0,
            index_hover: null,
            is_hover: false,
            height: 260,
            store,
        };
    },
    methods: {
        async load() {
            const respone = await fetch(
                "https://imdb-api.com/en/API/Top250Movies/" + store.api_key,
                store.requestOptions
            );
            const results = await respone.json();
            store.movies_top_rating = results.items;
        },
        next() {
            if (this.page_cur == 4) {
                this.page_cur = 0;
            } else this.page_cur++;
        },
        prev() {
            if (this.page_cur == 0) {
                this.page_cur = 4;
            } else this.page_cur--;
        },
        get_color() {
            if (store.dark_mode == true) {
                return `color: white !important;`;
            } else {
                return `color: black !important;`;
            }
        },
        hover(n) {
            this.index_hover = n;
            this.height = 350;
            this.is_hover = true;
        },
        out_hover() {
            this.index_hover = null;
            this.height = 260;
            this.is_hover = false;
        },
        get_height() {
            return `height: ${this.height}px;`;
        },
        select_top_rating() {},
    },

    async created() {
        await this.load(0);
    },
    template: `
    <h4 :style=get_color() style="margin-top: 20px">Top Rating</h4>
    <div class="carousel slide">
        <div class="carousel-indicators" style="justify-content: flex-end; bottom: -10px; width: 80%">
            <button type="button" data-bs-target="#top_rating_movies" :data-bs-slide-to="n-1" :class="[page_cur==n-1 ? 'active' : '']" v-for="n in 5" @click="page_cur=n-1"></button>
        </div>
    </div>
    <div id="top_rating_movies" class="carousel slide" data-bs-ride="carousel" >
        <div class="carousel-inner">  
            <div :class="['carousel-item', page_cur==n-1 ? 'active' : '']" data-bs-interval="10000" v-for="n in 5">
                <div style="display: flex; justify-content: center;" :style=get_height()> 
                    <div class="d-block" :class="[3*n-3==index_hover? 'hover':'']" style="width: 25%; margin: 0px 10px" alt="" @mouseover='hover(3*n-3)' @mouseout='out_hover()' @click="$emit('select_top_rating',3*n-3)">
                        <img :src="[store.movies_top_rating[n-1]? store.movies_top_rating[3*n-3].image : '']" style="width: 100%; max-height: 250px;">
                        <p v-if=3*n-3==index_hover style="position: absolute; width=100%">{{ store.movies_top_rating[n-1]? store.movies_top_rating[3*n-3].fullTitle : '' }}</p>
                    </div>
                    <div class="d-block" :class="[3*n-2==index_hover? 'hover':'']" style="width: 25%; margin: 0px 10px" alt="" @mouseover='hover(3*n-2)' @mouseout='out_hover()' @click="$emit('select_top_rating',3*n-2)">
                        <img :src="[store.movies_top_rating[n-1]? store.movies_top_rating[3*n-2].image : '']" style="width: 100%; max-height: 250px;">
                        <p v-if=3*n-2==index_hover style="position: absolute; width=100%">{{ store.movies_top_rating[n-1]? store.movies_top_rating[3*n-2].fullTitle : '' }}</p>
                    </div>
                    <div class="d-block" :class="[3*n-1==index_hover? 'hover':'']" style="width: 25%; margin: 0px 10px" alt="" @mouseover='hover(3*n-1)' @mouseout='out_hover()' @click="$emit('select_top_rating',3*n-1)">
                        <img :src="[store.movies_top_rating[n-1]? store.movies_top_rating[3*n-1].image : '']" style="width: 100%; max-height: 250px;">
                        <p v-if=3*n-1==index_hover style="position: absolute; width=100%">{{ store.movies_top_rating[n-1]? store.movies_top_rating[3*n-1].fullTitle : '' }}</p>
                    </div>
                </div>
            </div> 
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#top_rating_movies" data-bs-slide="prev" @click="prev()">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#top_rating_movies" data-bs-slide="next" @click="next()">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    `,
};
