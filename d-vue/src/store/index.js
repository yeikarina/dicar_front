import { createStore } from "vuex";
import serieRc from "@/assets/data/cilindros-general/serie-RC.json";

export default createStore({
    state: {
        title: "this one",
        serieRc: serieRc
    },
    mutations: {},
    actions: {},
    modules: {}
});