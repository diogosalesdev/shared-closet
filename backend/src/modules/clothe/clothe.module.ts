import { Module } from '@nestjs/common';
import { ClotheService } from './clothe.service';
import { ClotheController } from './clothe.controller';

@Module({
  controllers: [ClotheController],
  providers: [ClotheService]
})
export class ClotheModule {}
