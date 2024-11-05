import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, Req } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { RolesGuard } from 'common/guards/roles.guard';
import { Roles } from 'common/decorators/roles.decorator';
import { Role as RoleEnum } from 'common/enums/role.enum';
import { UserService } from '../services/user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'common/guards/jwt-auth.guard';

@ApiTags('Users')
@ApiBearerAuth('access-token') 
@Controller('user/v1')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Roles(RoleEnum.Admin)
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Roles(RoleEnum.Admin)
  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get('/me')
  async getProfile(@Req() req) {
    return this.userService.findOneById(req.user.id);
  }

  @Put('/me')
  async updateProfile(@Body() updateUserDto: UpdateUserDto, @Req() req) {
    return this.userService.update(req.user.id, updateUserDto);
  }

  @Roles(RoleEnum.Admin)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOneById(id);
  }


  @Roles(RoleEnum.Admin)
  @Put(':id')
  async updateUserByAdmin(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Roles(RoleEnum.Admin)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
