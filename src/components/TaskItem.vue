<template>
    <li class="task-item" :class="taskItemStyle">
        <div class="flex-center">
            <span :class="completedStyle" @click="toggleComplete(item.id)">
                <img v-if="item.completed" :src="CheckIcon" />
            </span>

            <span class="task-item-title">{{ item.title }}</span>
        </div>

        <div class="flex-center">
            <small :class="statusStyle">{{ item.status }}</small>

            <div v-if="!item.completed" class="tooltip-container">
                <button class="task-item-options">
                    <img :src="ThreeReadyIcon" />
                </button>

                <div class="tooltip">
                    <button class="btn-options" @click="showModalUpdateTask = true">
                        <span></span>
                        Editar
                    </button>

                    <button class="btn-options" @click="showModalRemoveTask = true">
                        <span></span>
                        Excluir
                    </button>
                </div>
                <UpdateTask :showModalUpdateTask="showModalUpdateTask" :item="item"
                    @update:showModalUpdateTask="showModalUpdateTask = $event" />
                <RemoveTask :showModalRemoveTask="showModalRemoveTask" :taskId="item.id"
                    @update:showModalRemoveTask="showModalRemoveTask = $event" />
            </div>
        </div>
    </li>
</template>

<script>
import { mapActions } from "vuex"

import CheckIcon from "@/assets/icons/check-icon.svg"
import ThreeReadyIcon from "@/assets/icons/three-ready-icon.svg"

import UpdateTask from "./UpdateTask.vue"
import RemoveTask from "./RemoveTask.vue"

export default {
    name: "TaskItem",
    components: {
        UpdateTask,
        RemoveTask,
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            CheckIcon,
            ThreeReadyIcon,
            showModalUpdateTask: false,
            showModalRemoveTask: false,
        }
    },
    methods: {
        ...mapActions(["toggleComplete"]),
    },
    computed: {
        statusStyle() {
            if (this.item.status === "Importante" || this.item.status === "Urgente") {
                return {
                    "status status-important": this.item.status === "Importante",
                    "status status-urgent": this.item.status === "Urgente",
                }
            }
            return {}
        },
        completedStyle() {
            return {
                "task-item-completed": this.item.completed,
                "task-item-completed-null": !this.item.completed,
            }
        },
        taskItemStyle() {
            return {
                "task-checked": this.item.completed,
            }
        },
    },
}
</script>

<style lang="stylus" scoped>
.task-item
  display flex
  flex-direction row
  justify-content space-between
  align-content: center
  list-style none
  background-color #FFFFFF
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
  border-radius 2.5px
  padding 15px 30px
  color #304458
  font-size 15px
  font-weight bold

.task-checked
  opacity 60%

  .task-item-title
    text-decoration: line-through

.task-item-completed
  display flex
  align-items center
  justify-content center
  background-color #0ED984
  border-radius 5px
  width 36px
  height 35px
  cursor pointer

.task-item-completed-null
  display flex
  background-color #E2EEF5
  border-radius 5px
  width 36px
  height 35px
  cursor pointer

.flex-center
  gap 10px

.task-item-title
  display flex
  justify-content center
  align-items center

.status
  display flex
  justify-content center
  align-items center
  padding 2.5px 15px
  border-radius 25px
  color #fff
  font-weight bold

.status-important
  background-color #FFC42E

.status-urgent
  background-color #FF2E79
  font-size bold
</style>
