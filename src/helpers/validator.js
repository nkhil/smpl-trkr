const Ajv = require("ajv");
const ajv = new Ajv();

const metricSchema = require('../schema/metric.json');

const validate = ajv.compile(metricSchema);

function metricSchemaValidator(data) {
  return validate(data)
}

module.exports = {
  metricSchemaValidator,
}
