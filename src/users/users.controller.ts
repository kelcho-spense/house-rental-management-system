import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Query,
  ParseIntPipe,
  ValidationPipe,
  ParseEnumPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/user.dto';
import { UserRole, User } from '@prisma/client';
import { ApiBearerAuth, ApiParam, ApiQuery } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/common/guards/roles.guard';
import { Roles } from 'src/auth/common/decorators/roles.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get() // GET /users or GET /users?limit=10&role=admin
  @Roles(UserRole.ADMIN) // Only users with the role of 'admin' can access this route
  @ApiQuery({ name: 'role', enum: UserRole, required: false })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  findAll(
    @Query('role', new ParseEnumPipe(UserRole, { optional: true }))
    role?: UserRole,
    @Query('limit', new ParseIntPipe({ optional: true })) limit?: number,
  ): Promise<User[]> {
    return this.usersService.findAll(role, limit);
  }

  @Get(':id') // GET /users/:id
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> | string {
    return this.usersService.findOne(id);
  }

  @Patch(':id') // PATCH /users/:id
  @ApiParam({ name: 'id', type: Number })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id') // DELETE /users/:id
  @ApiParam({ name: 'id', type: Number })
  remove(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.delete(id);
  }
}
