const request = require('supertest');
const { Screen } = require('../../../models/screensModel');
const mongoose = require('mongoose');

let server;

describe('/api/screens', () => {
  beforeEach(() => {
    process.env.NODE_ENV = 'test';
    server = require('../../../index');
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
    it('should return a screen if valid id passed', async () => {
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

  describe('POST /', () => {
    let screen_name;
    let component;

    const exec = async () => {
      return await request(server).post('/api/screens').send({ screen_name, component });
    };

    beforeEach(() => {
      screen_name = 'example1';
      component = 'example1';
    });

    it('should return 404 if screen already exists', async () => {
      const newScreen = new Screen({
        screen_name,
        component,
      });

      await newScreen.save();

      const res = await exec();

      await Screen.find({ screen_name: res.body.screen_name });

      expect(res.status).toBe(404);
    });
  });

  describe('PUT /:id', () => {
    let component;
    let screen;
    let newName;
    let id;

    const exec = async () => {
      return await request(server)
        .put(`/api/screens/${id}`)
        .send({ screen_name: newName, component });
    };

    beforeEach(async () => {
      screen = new Screen({
        screen_name: 'example1',
        component: 'example1',
      });

      await screen.save();

      id = screen._id;
      newName = 'updatedName';
      component = screen.component;
    });

    it('should return 404 if Id is invalid', async () => {
      id = 12;

      const res = await exec();

      expect(res.status).toBe(404);
    });

    it('should return 404 if screen with given id is not found', async () => {
      id = mongoose.Types.ObjectId();

      const res = await exec();

      expect(res.status).toBe(404);
    });

    it('should update screen if input is valid', async () => {
      await exec();

      const updatedScreen = await Screen.findById(id);

      expect(updatedScreen).toHaveProperty('screen_name', newName);
    });
  });
});
