import { describe, beforeEach, it, expect } from "vitest"
import store from "@/store"

describe("Editar Tarefa", () => {
    beforeEach(() => {
        store.replaceState({
            tasks: [],
        })
    })

    it("deve editar uma tarefa com sucesso", () => {
        // Adicionar uma tarefa
        const task = {
            id: Date.now(),
            title: "Tarefa 1",
            description: "Tarefa teste.",
            status: "Urgente",
        }

        store.dispatch("addTask", task)

        // Edita a tarefa
        const updatedTask = {
            ...task,
            description: "Tarefa teste atualizada.",
            status: "Urgente",
        }

        store.dispatch("updateTask", updatedTask)

        // Verifica se a tarefa foi editada
        const taskFromStore = store.getters.getFilteredTasks(updatedTask.description).shift()
        expect(taskFromStore.description).toEqual(updatedTask.description)
    })
})
