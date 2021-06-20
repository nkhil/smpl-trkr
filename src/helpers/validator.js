const Ajv = require("ajv");
const ajv = new Ajv();

function genericValidator(schema) {
  const validate = ajv.compile(schema);
  return (body) => validate(body)
}

module.exports = {
  validator: genericValidator,
}
