import { describe, beforeEach, it, expect } from "vitest"
import store from "@/store"

describe("Adicionar Tarefa", () => {
    beforeEach(() => {
        store.replaceState({
            tasks: [],
        })
    })

    it("deve adicionar uma tarefa com sucesso", () => {
        // Adiciona uma tarefa
        const newTask = {
            title: "Tarefa 1",
            description: "Teste Tarefa.",
            status: "Urgente",
        }

        store.dispatch("addTask", newTask)

        // Confirma que a tarefa foi adicionada corretamente
        const task = store.getters.getFilteredTasks(newTask.title).shift()
        expect(newTask.title).toEqual(task.title)
    })

    it("não deve adicionar uma tarefa sem um título ou status", () => {
        // Adiciona uma tarefa sem título
        const invalidTaskNoTitle = {
            title: "",
            description: "Tarefa Inválida.",
            status: "Inportante",
        }

        store.dispatch("addTask", invalidTaskNoTitle)

        // Adiciona uma tarefa sem status
        const invalidTaskNoStatus = {
            title: "",
            description: "Tarefa Inválida.",
        }

        store.dispatch("addTask", invalidTaskNoStatus)

        // Confirma que nenhuma tarefa foi adicionada
        const tasks = store.getters.getTasks
        expect(tasks).toHaveLength(0)
    })
})
