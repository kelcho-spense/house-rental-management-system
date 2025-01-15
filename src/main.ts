import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './http-exception.filter';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);

  //register all filters globally
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  // Enable CORS
  app.enableCors();

  // versioning
  app.setGlobalPrefix('api/v1');
  //setting header
  app.use(helmet());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
