import { Module } from '@nestjs/common';
import { ArtsService } from './arts.service';
import { ArtsController } from './arts.controller';

@Module({
  controllers: [ArtsController],
  providers: [ArtsService]
})
export class ArtsModule {}
