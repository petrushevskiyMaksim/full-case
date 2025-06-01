import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    // Base Config
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: { js },
        extends: ['js/recommended'],
        rules: {
            indent: [2, 4],
        },
    },

    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        languageOptions: { globals: globals.browser },
    },

    // TypeScript Config
    tseslint.configs.recommended,
    // tseslint.configs.strict, // более строгие правила включающие tseslint.configs.recommended
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': 'warn',
        },
    },

    // React Config
    {
        files: ['**/*.{jsx,tsx}'],
        ...pluginReact.configs.flat.recommended,

        plugins: { react: pluginReact },

        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/button-has-type': 'error',
        },
    },
]);
