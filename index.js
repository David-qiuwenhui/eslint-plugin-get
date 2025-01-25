// eslint plugin
// rule
module.exports = {
  rules: {
    get: {
      create(context) {
        // console.log("heiheihei eslint plugin get");
        console.log("context", context);

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
              });
            }
          },
        };
      },
    },
  },
};
