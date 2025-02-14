export default {
    addTask({ commit }, task) {
        commit("addTask", { ...task, id: task.id ?? Date.now(), completed: false })
    },
    updateTask({ commit }, updatedTask) {
        commit("updateTask", updatedTask)
    },
    removeTask({ commit }, taskId) {
        commit("removeTask", taskId)
    },
    toggleComplete({ commit }, taskId) {
        commit("toggleComplete", taskId)
    },
    setUser({ commit }, user) {
        commit("setUser", user)
    },
}
