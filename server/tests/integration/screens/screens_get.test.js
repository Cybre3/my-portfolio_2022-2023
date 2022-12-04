const request = require('supertest');
const { Screen } = require('../../models/screensModel');
const mongoose = require('mongoose');

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

  describe('GET /:id', () => {
    it('return a screen if valid id passed', async () => {
      const screen = new Screen({
        screen_name: 'example1',
        component: 'example1',
      });
      await screen.save();

      const res = await request(server).get(`/api/screens/${screen._id}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('screen_name', screen.screen_name);
    });

    it('should return 404 if invalid id passed.', async () => {
      const res = await request(server).get('/api/screens/52');

      expect(res.status).toBe(404);
    });

    it('should return 404 if no screen with given Id exists.', async () => {
      const id = mongoose.Types.ObjectId();
      const res = await request(server).get(`/api/screens/${id}`);

      expect(res.status).toBe(404);
    });
  });
});
