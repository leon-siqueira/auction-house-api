import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ArtsModule } from './arts/arts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, ArtsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
