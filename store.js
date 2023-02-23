const { reactive } = Vue;
export default reactive({
    dark_mode: false,
    back_dark_color: "#141414",
    dark_color: ["#212529", "#141414"],
    light_color: ["#F8F9FA", "#CCCCCC"],
    movies_new: [],
    movies_popular: [],
    movies_top_rating: [],
    movies_search: [],
    current_new: null,
    current_popular: null,
    current_top_rating: null,
    current_search: null,
    is_search: false,
    api_key: "k_jzy264hb",
    requestOptions: {
        method: "GET",
        redirect: "follow",
    },
});
