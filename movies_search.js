import store from "./store.js";
export default {
    data() {
        return {
            store,
        };
    },

    methods: {
        select_search() {},
    },

    template: `
    <div class="row row-cols-1 row-cols-md-3 g-4" style="color: black !important;">
        <div class="col" v-for="movie in store.movies_search" @click="$emit('select_search', movie.id)">
            <div class="card h-100 text-center">
                <img :src="movie.image" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">{{movie.title}}</h5>
                <p class="card-text">{{movie.description}}</p>
                </div>
            </div>
        </div>
  </div>
    `,
};
