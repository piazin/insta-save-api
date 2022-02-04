import * as igDl from '@sasmeee/igdl';
import { Test, TestingModule } from '@nestjs/testing';
import * as instagramGetUrl from 'instagram-url-direct';

import { ReelsService } from './reels.service';
import { Reels } from './entities/reels.entity';
import { ReelsController } from './reels.controller';
import { ReelsGatewayIgdl } from './gateways/reels-gateway-igdl';
import { ReelsGatewayInstagramUrl } from './gateways/reels-gateway-instagram-url';

describe('ReelsController', () => {
  let controller: ReelsController;
  let service: ReelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
    }).compile();

    service = module.get<ReelsService>(ReelsService);
    controller = module.get<ReelsController>(ReelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return reels entity', async () => {
    const reels = new Reels('', '');
    jest
      .spyOn(service, 'getReelsDownloadLink')
      .mockImplementation(() => Promise.resolve(reels));

    expect(
      await controller.downloadReels({ reelsUrl: 'https://insta.com' }),
    ).toEqual({ reels });
  });
});
