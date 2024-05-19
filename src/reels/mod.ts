import * as igDl from '@sasmeee/igdl';
import * as instagramGetUrl from 'instagram-url-direct';

import { Provider } from "@nestjs/common";
import { ReelsService } from "./reels.service";
import { ReelsGatewayIgdl } from "./gateways/reels-gateway-igdl";
import { ReelsGatewayInstagramUrl } from "./gateways/reels-gateway-instagram-url";

export const Services: Provider[] = [
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
]