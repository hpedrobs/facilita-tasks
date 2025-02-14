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
}
