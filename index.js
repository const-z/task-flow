"use strict";

const FlowSchema = require("./flow/schema");
const { fsRead } = require("./utils");

async function run() {
  const data = await fsRead("./flow.json", { encoding: "UTF-8" });
  const schema = JSON.parse(data);
  const flowSchema = new FlowSchema(schema);
  const result = await flowSchema.start({ count: 0 });

  console.log(JSON.stringify(result, null, 2));
}

run();
