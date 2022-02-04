import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { ReelsService } from './reels.service';
import { DownloadReelsDto } from './dto/download-reels.dto';

@Controller('reels')
export class ReelsController {
  constructor(private readonly reelsService: ReelsService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async downloadReels(@Body() reelsUrl: DownloadReelsDto) {
    try {
      const reels = await this.reelsService.getReelsDownloadLink(
        reelsUrl.reelsUrl,
      );

      return { reels };
    } catch (error) {
      throw error;
    }
  }
}
