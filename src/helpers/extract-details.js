function extractDetailsFromRequest(req) {
  return {
    host: req.headers.host,
    ipAddress: req.ip,
    userAgent: req.headers['user-agent']
  }
}

module.exports = extractDetailsFromRequest
