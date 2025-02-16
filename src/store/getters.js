export default {
    getTasks: (state) => state.tasks,
    getFilteredTasks: (state) => (query) => {
        return state.tasks.filter(
            (task) =>
                task.title.toLowerCase().includes(query.toLowerCase()) ||
                task.description.toLowerCase().includes(query.toLowerCase()),
        )
    },
    getTaskById: (state) => (taskId) => {
        return state.tasks.find((task) => task.id === taskId)
    },
    getOrderedTasks: (state) => {
        return [...state.tasks].sort((a, b) => {
            const priorityOrder = { Urgente: 1, Importante: 2, Outras: 3 }
            return priorityOrder[a.priority] - priorityOrder[b.priority]
        })
    },
    getUser: (state) => state.user,
    getIncompleteTasksCount: (state) => {
        return state.tasks.filter((task) => !task.completed).length
    },
    getTasksByFilter: (state) => (filter) => {
        switch (filter) {
            case "Finalizadas":
                return state.tasks.filter((task) => task.completed)
            case "Urgentes":
                return state.tasks.filter((task) => task.status === "Urgente")
            case "Importantes":
                return state.tasks.filter((task) => task.status === "Importante")
            case "Outras":
                return state.tasks.filter((task) => !task.status)
            case "Todas":
                return state.tasks
            default:
                return state.tasks
        }
    },
    getFilterCounts: (state) => {
        return {
            Todas: state.tasks.length,
            Urgentes: state.tasks.filter((task) => task.status === "Urgente").length,
            Importantes: state.tasks.filter((task) => task.status === "Importante").length,
            Outras: state.tasks.filter((task) => !task.status).length,
            Finalizadas: state.tasks.filter((task) => task.completed).length,
        }
    },
}
