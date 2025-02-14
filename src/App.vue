<script>
import { RouterView } from "vue-router"
import { mapGetters } from "vuex"
import LinkSidebar from "@/components/LinkSidebar.vue"

// Icones
import DashboardIcon from "@/assets/icons/dashboard-icon.svg"
import PlusCircleIcon from "@/assets/icons/plus-circle-icon.svg"
import ConfigIcon from "@/assets/icons/config-icon.svg"
import BarsIcon from "@/assets/icons/bars-icon.svg"
import AvatarIcon from "@/assets/icons/avatar-icon.svg"

export default {
    components: {
        RouterView,
        LinkSidebar,
    },
    data() {
        return {
            DashboardIcon,
            PlusCircleIcon,
            ConfigIcon,
            BarsIcon,
            AvatarIcon,
            isVisible: false,
        }
    },
    computed: {
        menuStyle() {
            return this.isVisible ? "display: block;" : "display: none;"
        },
        isLoginPage() {
            return this.$route.path === "/login"
        },
        ...mapGetters({ user: "getUser" }),
    },
}
</script>
<template>
    <div class="box-head">
        <!-- Sidebar -->
        <nav class="sidebar" v-if="!isLoginPage">
            <div class="logo">
                <img src="@/assets/images/logo-small.jpg" width="50" alt="Logo Pequena" />
            </div>

            <button type="button" class="menu-toggle" @click="isVisible = !isVisible">
                <img :src="BarsIcon" alt="Icone Menu Toggle" />
            </button>

            <ul class="menu" :style="menuStyle">
                <LinkSidebar text="Dashboard" :icon="DashboardIcon" :active="true" />
                <LinkSidebar text="Tarefas" :icon="PlusCircleIcon" />
                <LinkSidebar text="Configurações" :icon="ConfigIcon" />
            </ul>
        </nav>

        <div class="wrapper">
            <!-- Topbar -->
            <header class="top-bar" v-if="!isLoginPage">
                <div class="user-info">
                    <img :src="AvatarIcon" alt="Usuário" />
                    <div class="user-data">
                        <span class="title">{{ user.username }}</span>
                        <span class="subtitle">Front-end Developer</span>
                    </div>
                </div>
            </header>

            <!-- Main -->
            <main class="content">
                <RouterView />
            </main>
        </div>
    </div>
</template>
