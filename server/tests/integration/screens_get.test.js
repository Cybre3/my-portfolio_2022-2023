const request = require('supertest');
const { Screen } = require('../../models/screensModel');

let server;

describe('/api/screens', () => {
  beforeEach(() => {
    process.env.NODE_ENV = 'test';
    server = require('../../index');
  });

  afterEach(async () => {
    await Screen.deleteMany({});
    await server.close();
    process.env.NODE_ENV = 'development';
  });

  describe('GET /', () => {
    it('should return all screens', async () => {
      await Screen.collection.insertMany([
        {
          screen_name: 'example1',
          component: 'example1',
        },
        {
          screen_name: 'example2',
          component: 'example2',
        },
        {
          screen_name: 'example3',
          component: 'example3',
        },
      ]);

      const res = await request(server).get('/api/screens');

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(3);
      expect(res.body.some((g) => g.screen_name === 'example1')).toBeTruthy();
      expect(res.body.some((g) => g.component === 'example1')).toBeTruthy();
    });
  });
});
