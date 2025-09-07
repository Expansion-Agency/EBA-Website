import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';        // <-- Import ConfigModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';      // <-- Import AuthModule

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),        // <-- Add ConfigModule for env vars
    UsersModule,
    AuthModule,                                       // <-- Add AuthModule here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
