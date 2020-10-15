import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoginService } from './domains/login/login.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const loginService: LoginService = app.get(LoginService);
  loginService.login();
  await app.listen(3000);

}
bootstrap();
