import { describe, beforeEach, it, expect } from "vitest"
import store from "@/store"

describe("Alterar conclusão da tarefa", () => {
    beforeEach(() => {
        store.replaceState({
            tasks: [],
        })
    })

    it("deve marcar uma tarefa como completa", () => {
        // Adiciona uma tarefa
        const task = {
            id: Date.now(),
            title: "Tarefa 1",
            description: "Tarefa Teste.",
            status: "Urgente",
        }

        store.dispatch("addTask", task)

        // Marca a tarefa como completa
        store.dispatch("toggleComplete", task.id)

        // Verifica se a tarefa foi marcada como completa
        const taskFromStore = store.getters.getTaskById(task.id)
        expect(taskFromStore.completed).toBe(true)
    })

    it("deve alternar o estado de conclusão da tarefa", () => {
        // Adiciona uma tarefa
        const task = {
            id: Date.now(),
            title: "Tarefa 1",
            description: "Tarefa Teste.",
            status: "Urgente",
        }

        store.dispatch("addTask", task)

        // Marca a tarefa como completa e verifica
        store.dispatch("toggleComplete", task.id)
        expect(store.getters.getTaskById(task.id).completed).toBe(true)

        // Marca a tarefa como incompleta e verifica
        store.dispatch("toggleComplete", task.id)
        expect(store.getters.getTaskById(task.id).completed).toBe(false)
    })
})
