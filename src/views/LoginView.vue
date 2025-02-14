<script>
import { mapActions } from "vuex"

export default {
    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        ...mapActions(["setUser"]),
        handleLogin() {
            const { username, password } = this
            this.setUser({ username, password })
            this.$router.push({ name: "home" })
        },
    },
}
</script>

<template>
    <section class="w-full h-dvh bg-white">
        <div class="container-full p-0">
            <div class="row h-dvh">
                <div class="hidden-sm col-md-6 col-lg-4 bg-blue flex-center overflow-hidden">
                    <img src="@/assets/images/logo-large.jpg" width="400" height="200" />
                </div>
                <div class="col col-md-6 col-lg-8 flex-center">
                    <form class="form" action="/" method="get" @submit.prevent="handleLogin">
                        <fieldset>Entre com seus dados de acesso.</fieldset>

                        <div class="form-group">
                            <label for="">Nome de usuário ou e-mail:</label>
                            <input type="text" name="username" v-model="username" required />
                        </div>

                        <div class="form-group">
                            <label for="">Senha:</label>
                            <input type="text" name="password" v-model="password" required />
                        </div>

                        <button type="submit" class="btn btn-green">Entrar</button>

                        <a href="#">Esqueceu a senha?</a>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
