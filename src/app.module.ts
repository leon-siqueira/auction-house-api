import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArtsModule } from './arts/arts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, ArtsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
