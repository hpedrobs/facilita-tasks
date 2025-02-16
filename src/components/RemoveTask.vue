<template>
    <Modal :isOpen="showModalRemoveTask" @close="closeModal">
        <form class="form w-full flex-center" action="/" method="get" @submit.prevent="remove">
            <h3>Editar Tarefa</h3>

            <div class="remove-task-icon">
                <img :src="TrashIcon" />
            </div>

            <div class="flex-center flex-col">
                <p class="remove-task-text">
                    Tem certeza que deseja <span>excluir</span> esta tarefa?
                </p>
                <small>Esta ação não poderá ser desfeita.</small>
            </div>

            <div class="flex-center gap-15">
                <button type="button" class="btn btn-green" @click="closeModal">Cancelar</button>
                <button type="submit" class="btn btn-red">Remover</button>
            </div>
        </form>
    </Modal>
</template>

<script>
import { mapActions } from "vuex"

import Modal from "./Modal.vue"

import TrashIcon from "@/assets/icons/trash-icon.svg"

export default {
    name: "RemoveTask",
    components: {
        Modal,
    },
    props: {
        showModalRemoveTask: {
            type: Boolean,
            required: true,
        },
        taskId: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            showModal: false,
            TrashIcon,
        }
    },
    methods: {
        ...mapActions(["removeTask"]),
        remove() {
            this.removeTask(this.taskId)
            this.closeModal()
        },
        closeModal() {
            this.$emit("update:showModalRemoveTask", false)
        },
    },
}
</script>

<style lang="stylus" scoped>
.remove-task-icon
  background #EDF6FC
  padding 15px
  border-radius 50%
  width 136px
  height 136px
  display flex

  img
   margin auto

.remove-task-text
  color #283848

  span
    color #FF4874

small
  color #475E78
</style>
