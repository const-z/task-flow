const BeginComponent = require("./components/builtin/begin");

class FlowSchema {
  constructor(schema) {
    this.schema = schema;
  }

  static get START_TASK_NAME() {
    return "begin";
  }

  async start(params) {
    const component = new BeginComponent({
      name: FlowSchema.START_TASK_NAME,
      schema: this.schema
    });

    const result = await component.run(params);

    return result;
  }
}

module.exports = FlowSchema;
