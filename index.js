const app = require('./src');
const logger = require('@subgeniuscorp/logger');
const { PORT } = require('./src/config');

app.listen(8080, () => {
  logger.info(`Server running on port ${PORT}`);
});
