<template>
    <Modal :isOpen="showModalUpdateTask" @close="closeModal">
        <form class="form w-full" action="/" method="get" @submit.prevent="update">
            <h3>Editar Tarefa</h3>

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

            <button type="submit" class="btn btn-green" :disabled="!task.title">Salvar</button>
        </form>
    </Modal>
</template>

<script>
import { mapActions } from "vuex"

import Modal from "./Modal.vue"

export default {
    name: "UpdateTask",
    components: {
        Modal,
    },
    props: {
        showModalUpdateTask: {
            type: Boolean,
            required: true,
        },
        item: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            task: {
                id: this.item.id,
                title: this.item.title,
                description: this.item.description,
                status: this.item.status,
            },
        }
    },
    methods: {
        ...mapActions(["updateTask"]),
        update() {
            this.updateTask(this.task)
            this.closeModal()
        },
        closeModal() {
            this.$emit("update:showModalUpdateTask", false)
        },
    },
}
</script>
