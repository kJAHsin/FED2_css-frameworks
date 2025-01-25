import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    languageOptions: {
      globals: globals.browser,
      describe: true,
      test: true,
      it: true,
      expect: true,
      require: true,
      module: true,
      process: true,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
