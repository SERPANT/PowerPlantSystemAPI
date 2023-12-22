const cors = require('cors');
const express = require('express');
const compression = require('compression');

require('./env');
const config = require('./config');

const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());

app.use('/api', routes);

// Error Middleware
app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.methodNotAllowed);

app.listen(config.APP_PORT, () => {
  console.log(`Server is listening on ${config.APP_PORT}`);
});
