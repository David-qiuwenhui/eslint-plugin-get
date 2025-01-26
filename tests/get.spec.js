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
      output: "function getName(){return '' }",
      errors: [
        {
          message: "getName must return a value",
        },
      ],
    },
    {
      name: "error",
      code: "function getName(){ var a = 123; }",
      output: "function getName(){ var a = 123; return '' }",
      errors: [
        {
          message: "getName must return a value",
        },
      ],
    },
    {
      name: "no fix",
      options: [false],
      code: "function getName(){}",
      output: "function getName(){}",
      errors: [
        {
          message: "getName must return a value",
        },
      ],
    },
  ],
});
