const request = require('supertest');
const app = require('../app');

describe('API', () => {
  it('GET /hello --> json "HELLO WORLD', () => {
    return request(app)
      .get('/hello')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual('HELLO WORLD');
      });
  });
});
