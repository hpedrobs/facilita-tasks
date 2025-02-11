import { describe, beforeEach, it, expect } from "vitest"
import store from "@/store"

describe("Buscar Tarefas", () => {
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

    it("deve retornar tarefas que correspondem ao título ou descrição", () => {
        // Busca por título
        const resultByTitle = store.getters.getFilteredTasks("Urgente")
        expect(resultByTitle).toHaveLength(1)
        expect(resultByTitle[0].title).toBe("Tarefa Urgente")

        // Busca por descrição
        const resultByDescription = store.getters.getFilteredTasks("Importante")
        expect(resultByDescription).toHaveLength(1)
        expect(resultByDescription[0].description).toBe("Descrição Importante")
    })

    it("não deve retornar nenhuma tarefa quando não houver correspondência", () => {
        // Busca por título
        const result = store.getters.getFilteredTasks("Não Existe")
        expect(result).toHaveLength(0)
    })
})
