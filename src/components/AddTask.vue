<template>
    <div>
        <button class="icon-circle" @click="showModal = true">
            <img :src="PlusIcon" width="24" height="31" />
        </button>

        <Modal :isOpen="showModal" @close="showModal = false">
            <form class="form w-full" action="/" method="get" @submit.prevent="add">
                <h3>Cadastrar Tarefa</h3>

                <div class="form-group w-full">
                    <label for="">Título:</label>
                    <input type="text" v-model="task.title" />
                </div>

                <div class="form-group">
                    <label for="">Descrição:</label>
                    <textarea v-model="task.description" />
                </div>

                <div class="radio-group">
                    <label class="radio-container">
                        <input type="radio" value="Urgente" v-model="task.status" />
                        <span class="radio-check"></span>
                        Urgente
                    </label>
                    <label class="radio-container">
                        <input type="radio" value="Importante" v-model="task.status" />
                        <span class="radio-check"></span>
                        Importante
                    </label>
                </div>

                <button type="submit" class="btn btn-green" :disabled="!task.title">Entrar</button>
            </form>
        </Modal>
    </div>
</template>

<script>
import { mapActions } from "vuex"

import Modal from "./Modal.vue"
import PlusIcon from "@/assets/icons/plus-icon.svg"

export default {
    name: "AddTask",
    components: {
        Modal,
    },
    data() {
        return {
            PlusIcon,
            showModal: false,
            task: {
                title: "",
                description: "",
                status: "",
            },
        }
    },
    methods: {
        ...mapActions(["addTask"]),
        add() {
            this.addTask(this.task)
            this.resetTask()
            this.showModal = false
        },
        resetTask() {
            this.task = {
                title: "",
                description: "",
                status: "",
            }
        },
    },
}
</script>

<style lang="stylus" scoped>
h3
 color #283848
 font-size 25px
 font-weight bold

.icon-circle
    position fixed
    bottom 20px
    right 20px
    margin 0
</style>
