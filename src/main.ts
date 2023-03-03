import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'httpException.filter';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('SLEACT API')
    .setDescription('슬리액트 개발 문서')
    .setVersion('1.0')
    .addTag('Sleact')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);

  new Logger().log(`Listening port ${port}`, 'main.ts');

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();