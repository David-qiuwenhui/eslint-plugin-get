// eslint plugin
// rule
module.exports = {
  rules: {
    get: {
      meta: {
        fixable: "code",
      },
      create(context) {
        // console.log("heiheihei eslint plugin get");
        console.log("context.....", context.options);
        const isFix = context.options[0];

        // visitor
        return {
          FunctionDeclaration(node) {
            const functionName = node.id.name;
            if (!functionName.startsWith("get")) {
              return;
            }

            const blockStatementBody = node.body.body;
            // 处理最后一个节点不是return的情况
            const lastNode = blockStatementBody[blockStatementBody.length - 1];
            if (!lastNode || lastNode.type !== "ReturnStatement") {
              context.report({
                node,
                message: `${functionName} must return a value`,
                fix(fixer) {
                  // 不自动修复;
                  if (isFix === false) {
                    return fixer.insertTextAfter(node, "");
                  }

                  const endPoint = node.range[1];
                  return fixer.replaceTextRange(
                    [endPoint - 1, endPoint],
                    "return '' }"
                  );
                },
              });
            }
          },
        };
      },
    },
  },
};
