import { BadRequestException, Inject, NotFoundException } from '@nestjs/common';
import { Reels } from '../entities/reels.entity';
import * as instagramGetUrl from 'instagram-url-direct';
import { ReelsGatewayInterface } from './reels-gateway-interface';

export class ReelsGatewayInstagramUrl implements ReelsGatewayInterface {
  constructor(
    @Inject('instagramUrl')
    private readonly instagramUrl: typeof instagramGetUrl,
  ) {}

  async download(reelsUrl: string): Promise<Reels> {
    try {
      const infoReels = await this.instagramUrl(reelsUrl);
      const reels = new Reels(infoReels.url_list, null);
      return reels;
    } catch (e) {
      throw new BadRequestException('Não foi possivel encontrar o reels.');
    }
  }
}
