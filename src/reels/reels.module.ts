import * as igDl from '@sasmeee/igdl';
import { Module } from '@nestjs/common';
import * as instagramGetUrl from 'instagram-url-direct';

import { ReelsService } from './reels.service';
import { ReelsController } from './reels.controller';
import { ReelsGatewayIgdl } from './gateways/reels-gateway-igdl';
import { ReelsGatewayInstagramUrl } from './gateways/reels-gateway-instagram-url';

@Module({
  controllers: [ReelsController],
  providers: [
    ReelsService,
    {
      provide: 'ReelsGatewayIgdl',
      useClass: ReelsGatewayIgdl,
    },
    {
      provide: 'ReelsGatewayImran',
      useClass: ReelsGatewayInstagramUrl,
    },
    {
      provide: 'igDl',
      useValue: igDl,
    },
    {
      provide: 'instagramUrl',
      useValue: instagramGetUrl,
    },
  ],
})
export class ReelsModule {}
