// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
// import storybook from 'eslint-plugin-storybook';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import i18next from 'eslint-plugin-i18next';
import { defineConfig } from 'eslint/config';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import gaponePlugin from 'eslint-plugin-gapone-plugin';
import unusedImports from 'eslint-plugin-unused-imports';

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
        languageOptions: {
            globals: {
                ...globals.browser, // сохраняем существующие браузерные глобалы
                __IS_DEV__: true,
                __API__: true,
                __PROJECT__: true,
            },
        },
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
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/ban-ts-comment': 'off',
        },
    },

    // React Config
    {
        files: ['**/*.{jsx,tsx}'],
        ...pluginReact.configs.flat.recommended,

        plugins: { react: pluginReact, 'react-hooks': reactHooksPlugin },

        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/button-has-type': 'error',
            'react-hooks/rules-of-hooks': 'error', // Проверяет правила хуков
            'react-hooks/exhaustive-deps': 'error', // Проверяет зависимости useEffect/useMemo/useCallback
        },
    },

    // Стандартная конфигурация i18next
    i18next.configs['flat/recommended'],

    // Кастомные правила для i18next
    {
        files: ['**/src/**/*.test.{ts,tsx}'],

        rules: {
            'i18next/no-literal-string': 'off',
        },
    },

    {
        files: ['json-server/**/*.js', 'scripts/**/*.js'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            'no-undef': 'off',
        },
    },

    // My plugin
    {
        plugins: { 'gapone-plugin': gaponePlugin },
        rules: {
            'gapone-plugin/path-cheker': ['error', { alias: '@' }],
            'gapone-plugin/public-api-imports': [
                'error',
                {
                    alias: '@',
                    testFilesPatterns: [
                        '**/*.test.*',
                        '**/*.story.*',
                        '**/StoreDecorator.tsx',
                    ],
                },
            ],
            'gapone-plugin/layer-imports': [
                'error',
                {
                    alias: '@',
                    ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
                },
            ],
        },
    },

    // eslint-plugin-unused-imports
    {
        plugins: {
            'unused-imports': unusedImports,
        },
        rules: {
            'unused-imports/no-unused-imports': 'error',
        },
    },
]);
