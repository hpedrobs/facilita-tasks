import js from "@eslint/js"
import pluginVue from "eslint-plugin-vue"
import pluginVitest from "@vitest/eslint-plugin"
import prettier from "eslint-config-prettier"
import pluginPrettier from "eslint-plugin-prettier"

export default [
    {
        name: "app/files-to-lint",
        files: ["**/*.{js,mjs,jsx,vue}"],
    },

    {
        name: "app/files-to-ignore",
        ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
    },

    js.configs.recommended,
    ...pluginVue.configs["flat/essential"],

    {
        ...pluginVitest.configs.recommended,
        files: ["src/**/__tests__/*"],
    },

    // Adiciona Prettier como última configuração para evitar conflitos
    prettier,
    {
        plugins: { prettier: pluginPrettier },
        rules: {
            "prettier/prettier": "error",
        },
    },
]
