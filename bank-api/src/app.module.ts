import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyFisrtController } from './controllers/my-fisrt/my-fisrt.controller';
import { BankAccount } from './models/bank-account.model';
import { BankAccountController } from './controllers/bank-account/bank-account.controller';
import { ConsoleModule } from 'nestjs-console';
import { FixturesCommand } from './fixtures/fixtures.command';
import { PixKeyController } from './controllers/pix-key/pix-key.controller';
import { PixKey } from './models/pix-keys.models';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ConsoleModule,
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION as any,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [BankAccount,PixKey]
    }),
    TypeOrmModule.forFeature([BankAccount,PixKey]),
    ClientsModule.register([
        {
          name: 'CODEPIX_PACKAGE',
          transport: Transport.GRPC,
          options: {
            url: process.env.GRPC_URL,
            package: 'github.com.sadestorm.codepix',
            protoPath: [join(__dirname, 'protofiles/pixkey.proto')]
          }
        }
     ]),

  ],
  controllers: [AppController, MyFisrtController, BankAccountController, PixKeyController],
  providers: [AppService,FixturesCommand],
})
export class AppModule {}
