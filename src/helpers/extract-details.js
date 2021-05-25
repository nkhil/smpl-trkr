module.exports = req => ({
  host: req.headers.host,
  ipAddress: req.ip,
  userAgent: req.headers['user-agent']
})