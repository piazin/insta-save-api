import { ReelsService } from './reels.service';
import { Reels } from './entities/reels.entity';

const reelsGateway = {
  download: jest.fn().mockReturnValue(new Reels('https://insta.com', '')),
};

describe('ReelsService', () => {
  let service: ReelsService;

  beforeEach(async () => {
    service = new ReelsService(reelsGateway);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a download link', async () => {
    const reels = new Reels('https://insta.com', '');
    const returnedReels =
      await service.getReelsDownloadLink('https://insta.com');

    expect(returnedReels).toEqual(reels);
  });
});
