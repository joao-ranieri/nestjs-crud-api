import { AuthModule } from './components/auth/auth.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/configService';
import { UserModule } from './components/user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
  ],
})
export class AppModule { }
