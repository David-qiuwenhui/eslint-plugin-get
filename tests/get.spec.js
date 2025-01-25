const { RuleTester } = require("eslint");
const { rules } = require("../index");

const ruleTester = new RuleTester();
ruleTester.run("get", rules.get, {
  valid: [
    {
      name: "success",
      code: "function getName(){ return '' }",
    },
    {
      name: "success",
      code: "function setName(){}",
    },
  ],
  invalid: [
    {
      name: "error",
      code: "function getName(){}",
      errors: [
        {
          message: "getName must return a value",
        },
      ],
    },
    {
      name: "error",
      code: "function getName(){ const a = 123; }",
      errors: [
        {
          message: "getName must return a value",
        },
      ],
    },
  ],
});
