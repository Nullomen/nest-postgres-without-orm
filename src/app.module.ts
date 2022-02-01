import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KnexModule } from 'nestjs-knex';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/db/database.module';
import { RentModule } from './modules/Rent/rent.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    KnexModule.forRootAsync({
      useFactory: () => ({
        config: {
          client: 'postgresql',
          useNullAsDefault: true,
          connection: {
            host: 'localhost',
            user: 'root',
            password: 'root_password',
            database: 'some_db',
          },
        },
      }),
    }),
    DatabaseModule,
    RentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
