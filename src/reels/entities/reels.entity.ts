export class Reels {
  reelsUrl: string;
  thumbnailLink: string | null;

  constructor(reelsUrl: string, thumbnailLink: string | null) {
    this.reelsUrl = reelsUrl;
    this.thumbnailLink = thumbnailLink;
  }
}
