const FlowComponent = require("../../base-component");
const { delay } = require("../../../utils");

class BasicComponent2 extends FlowComponent {
  constructor({ name, schema, executorName }) {
    super({ name, schema, executorName });
  }

  async body(params) {
    await delay(1000);
    params.count++;

    return params;
  }
}

module.exports = BasicComponent2;
