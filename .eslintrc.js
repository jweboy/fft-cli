/*
 * @Author: jweboy
 * @Date: 2019-12-03 16:18:35
 * @LastEditors: jweboy
 * @LastEditTime: 2020-12-05 13:29:36
 */
/**
 * @name 常规代码规则，
 * @url 采用 `eslint` 和 `airbnb` 的基础规则
 * 1. `airbnb` 基准规则 https://github.com/airbnb/javascript
 * 2. `eslint` 基准规则 https://cn.eslint.org/docs/rules
 * @description 规则数值含义
 * "off" 或 0 - 关闭规则
 * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
 * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 */

module.exports = {
  extends: [
    'eslint:recommended', // `eslint` 基准规则 //
    'airbnb-base', // `airbnb` 基准规则
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser', // 解析器
  plugins: [
    // 第三方插件
    'prettier',
  ],
  env: {
    browser: true, // 浏览器环境中的全局变量
    es6: true, // 启用除了 `modules` 以外的所有 `ECMAScript 6` 特性（该选项会自动设置 `ecmaVersion` 解析器选项为 6）
    node: true, // `Node.js` 全局变量和 `Node.js` 作用域
  },
  parserOptions: {
    sourceType: 'module', // `ECMAScript` 模块
    ecmaFeatures: {
      experimentalObjectRestSpread: true, // 对象剩余参数解构
    },
  },
  rules: {
    'prettier/prettier': ['error'], // 遵循 `.prettirc.js` 相关规则
    'no-console': 1,
    'no-unused-vars': 0, // 未使用变量声明
    'no-unused-expressions': 0,
    'no-param-reassign': 0,
    'no-use-before-define': 0, // 禁止定义前使用
    'no-shadow': 0,
    'no-underscore-dangle': 0, //
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'no-restricted-syntax': 0,
    'class-methods-use-this': 0,
    camelcase: 0,
  },
};
