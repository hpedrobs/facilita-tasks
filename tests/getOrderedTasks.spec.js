import { describe, beforeEach, it, expect } from "vitest"
import store from "@/store"

describe("Ordenar Tarefas por Prioridade", () => {
    beforeEach(() => {
        store.replaceState({
            tasks: [
                {
                    id: 1,
                    title: "Tarefa Urgente",
                    description: "Urgente",
                    status: "Urgente",
                    priority: "Urgente",
                },
                {
                    id: 2,
                    title: "Tarefa Importante",
                    description: "Importante",
                    status: "Importante",
                    priority: "Importante",
                },
                {
                    id: 3,
                    title: "Tarefa Outras",
                    description: "Outras",
                    status: "Outras",
                    priority: "Outras",
                },
            ],
        })
    })

    it("deve retornar as tarefas ordenadas por prioridade", () => {
        // Ordena as tarefas
        const orderedTasks = store.getters.getOrderedTasks
        expect(orderedTasks[0].priority).toBe("Urgente")
        expect(orderedTasks[1].priority).toBe("Importante")
        expect(orderedTasks[2].priority).toBe("Outras")
    })
})
