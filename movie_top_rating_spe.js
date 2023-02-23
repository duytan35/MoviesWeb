import store from "./store.js";
export default {
    data() {
        return {
            store,
        };
    },
    methods: {},
    template: `
    <h4 style="margin-top: 20px">Top Rating</h4>
    <div class="text-center">
        <img :src="store.current_top_rating.image" style="width: 40%">
        <h3>{{store.current_top_rating.title}}</h3>
        <p>Year: {{store.current_top_rating.year}}</p>
        <p>Crew: {{store.current_top_rating.crew}}</p>
        <p>ImDbRating: {{store.current_top_rating.imDbRating}}</p>
    </div>
    `,
};
