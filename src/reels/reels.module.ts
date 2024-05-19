import { Module } from '@nestjs/common';
import { ReelsController } from './reels.controller';
import { Services } from './mod';

@Module({
  controllers: [ReelsController],
  providers: [...Services]
})
export class ReelsModule {}
