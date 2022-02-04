import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ReelsGatewayInterface } from './gateways/reels-gateway-interface';

@Injectable()
export class ReelsService {
  constructor(
    @Inject('ReelsGatewayImran') private reelsGateway: ReelsGatewayInterface,
  ) {}

  async getReelsDownloadLink(url: string) {
    const reelsDownloadLink = await this.reelsGateway.download(url);

    if (!reelsDownloadLink.reelsUrl)
      throw new NotFoundException('Não foi posssivel encontrar este reels');

    return reelsDownloadLink;
  }
}
