import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import LoginView from "@/views/LoginView.vue"
import store from "@/store"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
        },
    ],
})

router.beforeEach((to, from, next) => {
    const user = store.state.user || JSON.parse(localStorage.getItem("user"))

    if (!user?.username && to.name !== "login") {
        // Se o usuário NÃO estiver logado e tentar acessar outra página, volta para login
        next({ name: "login" })
    } else if (user?.username && to.name === "login") {
        // Se o usuário ESTIVER logado e tentar acessar login, redireciona para home
        next({ name: "home" })
    } else {
        next() // Permite a navegação normal
    }
})

export default router
