<template>
    <div class="home-view">
        <OrderedTasksSidebar :selectedCategory="selectedCategory" @category-selected="updateCategoryFilter" />

        <div class="container w-full h-full flex-center">
            <div class="w-full">
                <h1>Minhas Tarefas</h1>
                <p>
                    Olá <span>{{ user.username }}</span>, você tem <span>{{ incompleteTasksCount }} tarefas</span>
                    pendentes.
                </p>
            </div>

            <SearchBar @search-updated="updateSearch" />

            <ToDoList :tasks="filteredTasks" />

            <AddTask />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

// Components
import OrderedTasksSidebar from "@/components/OrderedTasksSidebar.vue"
import AddTask from "@/components/AddTask.vue"
import SearchBar from "@/components/SearchBar.vue"
import ToDoList from "@/components/ToDoList.vue"

export default {
    name: "HomeView",
    components: {
        OrderedTasksSidebar,
        AddTask,
        SearchBar,
        ToDoList,
    },
    data() {
        return {
            searchQuery: "",
            selectedCategory: "Todas",
        }
    },
    computed: {
        ...mapGetters({
            incompleteTasksCount: "getIncompleteTasksCount",
            getTasks: "getTasks",
            getFilteredTasks: "getFilteredTasks",
            getTasksByFilter: "getTasksByFilter",
            user: "getUser",
        }),
        filteredTasks() {
            let tasks = this.getTasksByFilter(this.selectedCategory || "Todas")

            if (this.searchQuery) {
                return tasks.filter(
                    (task) =>
                        task.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                        task.description.toLowerCase().includes(this.searchQuery.toLowerCase()),
                )
            }

            return tasks
        },
    },
    methods: {
        updateSearch(value) {
            this.searchQuery = value
        },
        updateCategoryFilter(category) {
            this.selectedCategory = category
        },
    },
}
</script>

<style lang="stylus" scoped>
.home-view
  display flex
  height: 100%

.container
  flex-direction column
  max-width 705px
  gap 25px

h1, p
  text-align start
  width 100%
  margin 0

span
  color #2693FF
  font-weight bold
  margin 0 5px
</style>
