import store from "./store.js";
export default {
    data() {
        return {
            store,
            data_search: "",
        };
    },
    methods: {
        get_color() {
            if (store.dark_mode == true) {
                return `color: white !important;`;
            } else {
                return `color: black !important;`;
            }
        },
        home() {},
        search() {},
    },

    template: `
    <nav class="navbar bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" :style=get_color() @click="$emit('home')">Home</a>
            <form class="d-flex" role="search">
                <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    v-model='data_search'
                />
                <button href="#" type="button" class="btn btn-outline-success" @click="$emit('search', data_search)">
                    Search
                </button>
            </form>
        </div>
    </nav>
    `,
};
