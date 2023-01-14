import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { SurahModule } from './surah/surah.module';
import { AyahModule } from './ayah/ayah.module';
import { GqlConfigService } from './_common/graphql/graphql.provider';
import { LoggerModule } from './_common/logger/logger.module';
import { ContextModule } from './_common/context/context.module';
import { Timestamp } from './_common/graphql/timestamp.scalar';
import { JSON } from './_common/graphql/json.scalar';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './_common/exceptions/validation.pipe';
import { HttpExceptionFilter } from './_common/exceptions/exception-filter';
import { GqlResponseInterceptor } from './_common/graphql/graphql-response.interceptor';
import { PinoLogger } from 'nestjs-pino';
import { DatabaseModule } from './_common/database/database.module';
import { DataloaderModule } from './_common/dataloader/dataloader.module';
import { HelperModule } from './_common/utils/helper.module';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    AyahModule,
    SurahModule,
    DatabaseModule,
    HelperModule,
    LoggerModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
      imports: [ContextModule , DataloaderModule]
    }),
  ],
  providers: [
    AppService,
    Timestamp,
    JSON,
    { provide: APP_PIPE, useClass: ValidationPipe },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    {
      provide: APP_INTERCEPTOR,
      useFactory: (logger: PinoLogger) => new GqlResponseInterceptor(logger),
      inject: [PinoLogger]
    }
  ],
  controllers: [AppController],
})
export class AppModule {}
