const supertest = require('supertest');
const app = require('../src/app');

const request = supertest(app);

describe('Days', () => {
  xit('fetch all days', async () => {
    const response = await request.get('/days');
    console.log(response.body);

    expect(response.status).toBe(200);
  });

  xit('fetch hours in specific day', async () => {
    const response = await request.get('/days/1');
    console.log(response.body);

    expect(response.status).toBe(200);
  });
});
