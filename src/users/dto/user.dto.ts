// user.dto.ts

import { PartialType } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { UserRole } from '@prisma/client';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsEnum(UserRole, {
    message: 'Invalid role. Must be one of: ADMIN, TENANT, LANDLORD, AGENT',
  })
  role: UserRole;

  @IsOptional()
  @IsString()
  username: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
