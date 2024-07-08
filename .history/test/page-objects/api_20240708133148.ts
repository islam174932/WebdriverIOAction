import request from 'supertest';

const baseUrl = 'https://reqres.in';

describe('GET /api/users', () => {
  it('should return a list of users in JSON format', async () => {
    const response = await request(baseUrl)
      .get('/api/users')
      .query({ page: 2 })
      .expect('Content-Type', /json/)
      .expect(200);

    console.log(response.body);
  });
});





