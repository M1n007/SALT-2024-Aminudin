import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './v1/controllers/user.controller';
import { UserService } from './v1/services/user.service';
import { User } from 'entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
