import store from "./store.js";
export default {
    data() {
        return {
            store,
            //     <h3>{{store.current_search? store.current_search.title : ''}}</h3>
            // <p> Year: {{store.current_search? store.current_search.year: ''}}</p>
            // <p>Genres: {{store.current_search? store.current_search.genres}}</p>
            // <p> Directors: {{store.current_search? store.current_search.directors: ''}}</p>
            // <p>Plot: {{store.current_search? store.current_search.plot: ''}}</p>
        };
    },

    methods: {},
    template: `
    <div class="text-center">
        <img :src="[store.current_search? store.current_search.image : '']" style="width: 40%">
        <h3>{{store.current_search? store.current_search.title : ''}}</h3>
        <p>Year: {{store.current_search? store.current_search.year: ''}}</p>
        <p>Genres: {{store.current_search? store.current_search.genres: ''}}</p>
        <p>Directors: {{store.current_search? store.current_search.directors: ''}}</p>
        <p>Plot: {{store.current_search? store.current_search.plot: ''}}</p>
    </div>
    `,
};
