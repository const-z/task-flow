const fs = require("fs");
const { promisify } = require("util");

const delay = promisify(setTimeout);
const fsRead = promisify(fs.readFile);

function clone(a) {
  if (a === undefined) {
    return undefined;
  }
  if (a === null) {
    return null;
  }
  return JSON.parse(JSON.stringify(a));
}

module.exports = {
  delay,
  fsRead,
  clone
};
