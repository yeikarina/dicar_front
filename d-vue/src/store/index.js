import { createStore } from "vuex";
import serieRc from "@/assets/data/cilindros-general/serie-RC.json";
import serieClp from "@/assets/data/cilindros-general/serie-CLP.json";

let cilindros = [serieRc, serieClp];

export default createStore({
    state: {
        producto: "",
        productos: [cilindros],
        selectProduct: [],
    },
    mutations: {
        changeSelector(state, payload) {
            state.selectProduct = state.productos[payload.selectProduct];
            state.producto = payload.producto;
            console.log(payload.producto);
        },
    },
    actions: {},
    getters: {},
    modules: {},
});