import { createStore } from "vuex";
import serieRc from "@/assets/data/cilindros-general/serie-RC.json";
import serieClp from "@/assets/data/cilindros-general/serie-CLP.json";
import serieRSM from "@/assets/data/cilindros-general/serie-RSM.json";


let cilindros = [serieRc, serieClp, serieRSM];

export default createStore({
    state: {
        producto: "",
        productos: [cilindros],
        selectProduct: [],
        selectSerie: {}
    },
    mutations: {
        changeSelector(state, payload) {
            state.selectProduct = state.productos[payload.selectProduct];
            state.producto = payload.producto;
        },
        chooseProduct(state, payload) {
            state.selectSerie = state.selectProduct[payload];
        }
    },
    actions: {},
    getters: {},
    modules: {},
});