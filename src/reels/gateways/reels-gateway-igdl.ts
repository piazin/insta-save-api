import * as igDl from '@sasmeee/igdl';
import { BadRequestException, Inject } from '@nestjs/common';
import { Reels } from '../entities/reels.entity';
import { ReelsGatewayInterface } from './reels-gateway-interface';

export class ReelsGatewayIgdl implements ReelsGatewayInterface {
  constructor(@Inject('igDl') protected igdl: typeof igDl) {}

  async download(reelsUrl: string): Promise<Reels> {
    try {
      const infoReels = (await this.igdl(reelsUrl))[0];
      const reels = new Reels(
        infoReels.download_link,
        infoReels.thumbnail_link,
      );
      return reels;
    } catch (e) {
      throw new BadRequestException('Não foi possivel encontrar o reels.');
    }
  }
}
