import store from "./store.js";
export default {
    data() {
        return {
            store,
        };
    },
    methods: {
        dark_mode() {},
    },
    template: `
    <div class="header">
        <p class="mssv">20120574</p>
        <h1 class="title">Movies info</h1>
        <div class="control">
            <p class="api_key">{{store.api_key}}</p>
            <div class="form-check form-switch">
                <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    @click="$emit('dark_mode')"
                />
                <label class="form-check-label" for="flexSwitchCheckDefault"
                    >Dark mode</label
                >
            </div>
        </div>
    </div>
    `,
};
