const swaggerJsdoc = require('swagger-jsdoc');
const dotenv = require('dotenv');

dotenv.config();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Car Management API',
      version: '1.0.0',
      description: 'API documentation for the Car Management Application',
    },
    servers: [
      {
        // url: 'http://localhost:5000',
        url: process.env.PROD_URL,
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

// const swaggerDocs = (app) => {
//   app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));
// };

module.exports = specs;