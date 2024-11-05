import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { getJwtConfig } from 'config/jwt.config';
import { validate } from './validations/env.validation';
import { PaginationService } from './services/pagination.service';
import { HashService } from './services/hash.service';
import { TransactionManagerService } from './services/transaction-manager.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validate,
    }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtConfig,
    }),
  ],
  providers: [
    PaginationService,
    HashService,
    TransactionManagerService
  ],
  exports: [
    PaginationService,
    HashService,
    JwtModule,
    TransactionManagerService
  ],
})
export class CommonModule {}
