import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('빈 모임 요청을 저장하지 않고 거부한다.', async () => {
    await request(app.getHttpServer()).post('/gatherings').send({}).expect(400);

    await request(app.getHttpServer())
      .get('/gatherings')
      .expect(200)
      .expect([]);
  });

  it('허용되지 않는 필드가 포함된 요청을 저장하지 않고 거부한다.', async () => {
    await request(app.getHttpServer())
      .post('/gatherings')
      .send({
        title: '제목입니다.',
        description: '상세 내용 입니다!!',
        isAdmin: 'true',
      })
      .expect(400);

    await request(app.getHttpServer())
      .get('/gatherings')
      .expect(200)
      .expect([]);
  });

  it('앞뒤 공백이 있는 요청을 보내면 앞뒤 공백이 제거된 응답을 반환한다.', async () => {
    await request(app.getHttpServer())
      .post('/gatherings')
      .send({ title: '  제목입니다.  ', description: '   상세 내용 입니다!! ' })
      .expect(201)
      .expect((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            title: '제목입니다.',
            description: '상세 내용 입니다!!',
            createdAt: expect.any(String),
          }),
        );
      });

    await request(app.getHttpServer())
      .get('/gatherings')
      .expect(200)
      .expect((response) => {
        expect(response.body).toHaveLength(1);
        expect(response.body[0]).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            title: '제목입니다.',
            description: '상세 내용 입니다!!',
            createdAt: expect.any(String),
          }),
        );
      });
  });

  it('공백 10개를 가진 description 요청을 저장하지 않고 거부한다.', async () => {
    await request(app.getHttpServer())
      .post('/gatherings')
      .send({
        title: '제목입니다.',
        description: '          ',
      })
      .expect(400);

    await request(app.getHttpServer())
      .get('/gatherings')
      .expect(200)
      .expect([]);
  });

  afterEach(async () => {
    await app.close();
  });
});
