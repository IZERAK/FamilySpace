import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FamilySpace API',
      version: '1.0.0',
      description: 'API documentation for FamilySpace project',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local Development Server',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

export default swaggerSpec;