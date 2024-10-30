/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "lambda",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const fn = new sst.aws.Function("Foo", {
      url: true,
      handler: "index.handler",
    });

    return {
      api: fn.url,
    };
  }
});
