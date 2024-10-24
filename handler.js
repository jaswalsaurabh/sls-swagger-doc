const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const express = require('express');
const serverless = require('serverless-http');

const app = express();
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// local server

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
//   });

module.exports.serveApiDocs = serverless(app);