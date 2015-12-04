var fs = require("fs");

exports.fromFile = (path) => {
  return fs.readFileSync(path, "utf8");
};

exports.fromResource = (resName) => {
  return exports.fromFile("resources/" + resName);
};
