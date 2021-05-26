const extractDetailsFromRequest = require('../../src/helpers/extract-details');

describe('#extractDetailsFromRequest', () => {
  it('can extract details from a request', () => {
    const req = {
      headers: {
        'x-forwarded-for': 'Domnic Cummings',
        host: 'Domnic',
        'user-agent': 'Agent Muldoon',
      },
      ip: '192.0.0.2',
      foo: 'bar',
    }
    const result = extractDetailsFromRequest(req);
    expect(result).toMatchObject({
      host: 'Domnic',
      ipAddress: '192.0.0.2',
      userAgent: 'Agent Muldoon',
    });
  })
})