export default {
    addTask(state, task) {
        if (!task.title || !task.status) return

        state.tasks.push(task)
        localStorage.setItem("tasks", JSON.stringify(state.tasks))
    },
    updateTask(state, updatedTask) {
        const index = state.tasks.findIndex((task) => task.id === updatedTask.id)
        if (index !== -1) {
            state.tasks[index] = updatedTask
            localStorage.setItem("tasks", JSON.stringify(state.tasks))
        }
    },
    removeTask(state, taskId) {
        state.tasks = state.tasks.filter((task) => task.id !== taskId)
        localStorage.setItem("tasks", JSON.stringify(state.tasks))
    },
    toggleComplete(state, taskId) {
        const task = state.tasks.find((task) => task.id === taskId)
        if (task) {
            task.completed = !task.completed
            localStorage.setItem("tasks", JSON.stringify(state.tasks))
        }
    },
    setUser(state, user) {
        if (!user.username) return

        state.user = user
        localStorage.setItem("user", JSON.stringify(state.user))
    },
}
