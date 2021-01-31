import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Product from "../views/product.vue";
import Lista from "../views/lista.vue";
import Empresa from "../views/empresa.vue";
import Contacto from "../views/contacto.vue";




const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/productos",
        name: "Products",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Products
    },
    {
        path: "/:producto/:serie/",
        name: "product",
        component: Product
    },
    {
        path: "/:producto/",
        name: "lista",
        component: Lista
    },
    {
        path: "/empresa/",
        name: "empresa",
        component: Empresa
    },
    {
        path: "/contacto/",
        name: "contacto",
        component: Contacto
    }
];

const router = createRouter({
    mode: 'hash',
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;