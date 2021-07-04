import { Module } from '@nestjs/common';
import { FrontsideController } from './frontside.controller';

@Module({
  controllers: [FrontsideController]
})
export class FrontsideModule {}
