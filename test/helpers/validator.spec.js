const {
  metricSchemaValidator
} = require('../../src/helpers/validator');

describe('#metricSchemaValidator', () => {
  it('validates a valid payload against the metric schema', () => {
    const data = {
      userId: 1234,
      alias: 'Github home',
      sourceId: 1234,
      hostName: 'https://github.com',
      ipAddress: '123.5.4.2',
      userAgent: 'hello world',
    };
    expect(metricSchemaValidator(data)).toBe(true);
  });

  it('invalidates a payload missing required properties', () => {
    const data = {
      alias: 'Github home',
      sourceId: 1234,
      hostName: 'https://github.com',
      ipAddress: '123.5.4.2',
      userAgent: 'hello world',
    };
    expect(metricSchemaValidator(data)).toBe(false);
  })
})
