import store from "./store.js";
export default {
    data() {
        return {
            store,
        };
    },

    methods: {},
    template: `
    <div class="text-center">
        <img :src="store.current_new.image" style="width: 40%">
        <h3>{{store.current_new.title}}</h3>
        <p>Year: {{store.current_new.year}}</p>
        <p>Genres: {{store.current_new.genres}}</p>
        <p>Directors: {{store.current_new.directors}}</p>
        <p>Stars: {{store.current_new.stars}}</p>
        <p>Plot: {{store.current_new.plot}}</p>
    </div>
    `,
};
