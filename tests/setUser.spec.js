import { describe, beforeEach, it, expect } from "vitest"
import store from "@/store"

describe("Definir Usuário", () => {
    beforeEach(() => {
        store.replaceState({
            user: null,
        })
    })

    it("deve definir um usuário com sucesso", () => {
        // Adiciona um usuário
        const setUser = {
            username: "Pedro",
            password: "12345",
        }

        store.dispatch("setUser", setUser)

        // Confirma que a tarefa foi adicionada corretamente
        const user = store.getters.getUser
        expect(user.username).toEqual("Pedro")
    })

    it("não deve definir um usuário sem um nome", () => {
        // Adiciona um usuário sem nome
        const setUser = {
            username: "",
            password: "12345",
        }

        store.dispatch("setUser", setUser)

        // Verifica se o usuário não foi definido
        const user = store.getters.getUser
        expect(user).toBeNull()
    })
})
