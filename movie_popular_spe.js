import store from "./store.js";
export default {
    data() {
        return {
            store,
        };
    },

    methods: {},
    template: `
    <h4 style="margin-top: 20px">Most Popular</h4>
    <div class="text-center">
        <img :src="store.current_popular.image" style="width: 40%">
        <h3>{{store.current_popular.title}}</h3>
        <p>Year: {{store.current_popular.year}}</p>
        <p>Crew: {{store.current_popular.crew}}</p>
        <p>ImDbRating: {{store.current_popular.imDbRating}}</p>
    </div>
    `,
};
