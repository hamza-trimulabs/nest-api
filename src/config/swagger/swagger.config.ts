import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('NestJS REST API Documentation')
  .setDescription('This documentation is for NestJS REST API documentation')
  .setVersion('1.0.0')
  .addServer(`http://localhost:3000`, 'Local environment')
  .build();
