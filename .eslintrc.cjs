/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  overrides: [
    {
      files: ["src/pages/**/index.vue", "src/pages/*.vue"],
      rules: {
        "vue/multi-word-component-names": 0,
      },
    },
  ],
  ignorePatterns: [
    "**/vue3-typescript-plugin/*.js",
    "@dbetka/vue3-typescript-plugin",
  ],
};
