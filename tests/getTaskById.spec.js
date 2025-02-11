import { describe, beforeEach, it, expect } from "vitest"
import store from "@/store"

describe("Buscar Tarefa por ID", () => {
    beforeEach(() => {
        store.replaceState({
            tasks: [
                {
                    id: 1,
                    title: "Tarefa Urgente",
                    description: "Descrição Urgente",
                    status: "Urgente",
                },
                {
                    id: 2,
                    title: "Tarefa Importante",
                    description: "Descrição Importante",
                    status: "Importante",
                },
            ],
        })
    })

    it("deve retornar a tarefa correta com base no id", () => {
        // Busca por id
        const task = store.getters.getTaskById(1)
        expect(task).toBeDefined()
        expect(task.id).toBe(1)
        expect(task.title).toBe("Tarefa Urgente")

        // Busca por id
        const taskNotFound = store.getters.getTaskById(999)
        expect(taskNotFound).toBeUndefined()
    })
})
