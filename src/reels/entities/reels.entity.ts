export class Reels {
  downloadLink: string;
  thumbnailLink: string | null;

  constructor(downloadLink: string, thumbnailLink: string | null) {
    this.downloadLink = downloadLink;
    this.thumbnailLink = thumbnailLink;
  }
}
