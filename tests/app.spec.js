const request = require('supertest');
const app = require('../app');

describe('GET /healthcheck', () => {
  it('responds with status: UP', async () => {
    const response = await request(app).get('/healthcheck');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'UP' });
  });
});