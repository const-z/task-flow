const vm = require("vm");

const FlowComponent = require("../../base-component");

class Condition extends FlowComponent {
  constructor({ name, schema, executorName }) {
    super({ name, schema, executorName });
  }

  async body(params) {
    const result = vm.runInNewContext(this.task.expression, params);
    this.task.next = result ? this.task.true : this.task.false;

    return params;
  }
}

module.exports = Condition;
