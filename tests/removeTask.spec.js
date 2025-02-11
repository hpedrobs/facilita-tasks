import { describe, beforeEach, it, expect } from "vitest"
import store from "@/store"

describe("Excluir Tarefa", () => {
    beforeEach(() => {
        store.replaceState({
            tasks: [],
        })
    })

    it("deve excluir uma tarefa com sucesso", () => {
        // Adiciona uma tarefa
        const task = {
            id: Date.now(),
            title: "Tarefa 1",
            description: "Tarefa Teste.",
            status: "Urgente",
        }

        store.dispatch("addTask", task)

        // Confirma que a tarefa foi adicionada corretamente
        expect(store.getters.getTaskById(task.id)).toBeDefined()

        // Remove a tarefa
        store.dispatch("removeTask", task.id)

        // Confirma que a tarefa foi removida
        expect(store.getters.getTaskById(task.id)).toBeUndefined()
    })
})
