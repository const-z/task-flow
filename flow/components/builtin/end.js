const FlowComponent = require("../../base-component");

class End extends FlowComponent {
  constructor({ name, schema, executorName }) {
    super({ name, schema, executorName });
  }

  async body(params) {
    return params;
  }
}

module.exports = End;
