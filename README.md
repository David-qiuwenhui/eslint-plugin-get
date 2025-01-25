# 实现一个 eslint plugin 扩展规则

## rule:

- get 命名开头的函数，必须有返回值
- fix 可自动添加 return ''
- 可以通过 options 的形式控制 fix 的行为

## 步骤

- 搭建开发和测试环境
- 功能实现分析
- 使用 TDD 的方式开发
- 发布到 npm 上

## 测试框架爱

mocha
`npm i mocha -D`
进入 watch 模式：`npm test -- --watch`
