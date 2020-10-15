import { Module } from '@nestjs/common';
import { LoginModule } from './domains/login/login.module';

@Module({
  imports: [ 
    LoginModule
  ]
})
export class AppModule {}
