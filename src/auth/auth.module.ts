import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AtStrategy, RfStrategy } from './strategies';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from 'src/database/database.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'jwt-at' }),
    JwtModule.register({
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      signOptions: { expiresIn: '15m' },
    }),
  ], //since we have two tokes signing secrete will happen in the services
  controllers: [AuthController],
  providers: [AuthService, AtStrategy, RfStrategy],
  exports: [JwtModule],
})
export class AuthModule {}
