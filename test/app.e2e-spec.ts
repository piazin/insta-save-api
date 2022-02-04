import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('reels', () => {
    it('/reels (POST) should return status code 200', async () => {
      const payload = {
        reelsUrl:
          'https://www.instagram.com/reel/C4DkDOsM36r/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      };

      const response = await request(app.getHttpServer())
        .post('/reels')
        .send(payload)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200);

      expect(response.body.reels.reelsUrl).toBeDefined();
    });

    it('/reels (POST) should return status code 400', async () => {
      const payload = {
        reelsUrl: '',
      };

      const response = await request(app.getHttpServer())
        .post('/reels')
        .send(payload)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400);

      expect(response.body.statusCode).toBe(400);
    });
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(404);
  });
});
