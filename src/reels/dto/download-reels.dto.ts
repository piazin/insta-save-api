import { IsNotEmpty } from 'class-validator';

export class DownloadReelsDto {
  @IsNotEmpty({ message: 'reelsUrl não pode ser vazio.' })
  reelsUrl: string;
}
