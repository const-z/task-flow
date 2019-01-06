const EventEmitter = require("events");

const utils = require("../utils");

class BaseComponent extends EventEmitter {
  constructor({ name, schema, executorName }) {
    super();
    this.task = schema[name];
    this.name = name;
    this.schema = schema;
    this.executorName = executorName;
  }

  static get RUN_COMPONENT() {
    return "RUN_COMPONENT";
  }

  get next() {
    const task = this.schema[this.task.next];

    return task;
  }

  async run(params) {
    console.log(
      `run ${this.executorName} -> ${this.name} - ${JSON.stringify(params)}`
    );

    const result = await this.body(params);
    const nextResult = await this._next(result);

    return nextResult;
  }

  async _next(params) {
    const nextTask = this.next;

    if (!nextTask) {
      return params;
    }

    const Component = require(`./components/${nextTask.component.source}/${
      nextTask.component.id
    }`);

    const component = new Component({
      name: this.task.next,
      schema: this.schema,
      executorName: this.name
    });

    return component.run(utils.clone(params));
  }
}

module.exports = BaseComponent;
