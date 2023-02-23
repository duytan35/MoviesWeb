import store from "./store.js";
export default {
    data() {
        return {
            page_cur: 0,
            store,
        };
    },

    methods: {
        async load() {
            const respone = await fetch(
                "https://imdb-api.com/en/API/InTheaters/" + store.api_key,
                store.requestOptions
            );
            const results = await respone.json();
            store.movies_new = results.items;
        },
        next() {
            if (page_cur == 4) {
                page_cur = 0;
            } else page_cur++;
        },
        prev() {
            if (page_cur == 0) {
                page_cur = 4;
            } else page_cur--;
        },
        select_new() {},
    },

    async created() {
        await this.load(0);
    },
    template: `
    <div id="newest_movies" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#newest_movies" :data-bs-slide-to="n-1" :class="[page_cur==n-1 ? 'active' : '']" v-for="n in 5"></button>
        </div>
        <div class="carousel-inner" >  
            <div :class="['carousel-item', page_cur==n-1 ? 'active' : '']" data-bs-interval="10000" v-for="n in 5" @click="$emit('select_new', n-1)">
                <img :src="[store.movies_new[n-1]? store.movies_new[n-1].image : '']" class="d-block mx-auto" style="width: 30%;" alt="">
                <div class="carousel-caption d-none d-md-block">
                    <h5>{{store.movies_new[n-1]? store.movies_new[n-1].fullTitle : ''}}</h5>
                </div>
            </div> 
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#newest_movies" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#newest_movies" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    `,
};
