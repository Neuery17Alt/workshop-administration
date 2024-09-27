import withNuxt from "./.nuxt/eslint.config.mjs"
import eslintConfigPrettier from "eslint-config-prettier"

export default withNuxt(
    {
        files: ["**/*.ts", "**/*.tsx"],
        rules: {
            "no-console": "off",
        },
    },
    {
        // ignore third party generated code
        ignores: ["components/ui/*", "types/supabase.ts"],
    },
    eslintConfigPrettier,
)