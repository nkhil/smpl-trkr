const logger = require('@subgeniuscorp/logger');
const { validator } = require('../helpers/validator');
const metricsSchema = require('../schema/metric.json');

const metricsSchemaValidator = validator(metricsSchema)

function metricsEmitter(body) {
  const schemaIsValid = metricsSchemaValidator(body)
  if (schemaIsValid) {
    logger.info('Schema is valid')
  } else {
    logger.info('Schema is not valid')
  }
}

module.exports = {
  metricsEmitter,
}
