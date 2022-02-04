import { Reels } from '../entities/reels.entity';

export interface ReelsGatewayInterface {
  download(reelsUrl: string): Promise<Reels>;
}
