import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ['**/*.{ts,tsx,mts,cts}'], 
    languageOptions: {
      parser: tsParser,               
      parserOptions: { project: './tsconfig.json' }
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
    }
]);

