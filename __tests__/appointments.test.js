const supertest = require('supertest');
const axios = require('axios');
const app = require('../src/app');

// const UserModel = require('../src/models/user');
// const { defaultUser1, defaultUser2 } = require('./defaultModels');

const request = supertest(app);

let token;

describe('Days', () => {
  beforeEach(async (done) => {
    await axios({
      method: 'post',
      url: 'http://auth-api1:5000/token-auth',
      data: {
        email: 'haku@email.com',
        password: 'testing',
        iduser: 1,
      },
    })
      .then((response) => {
        token = response.data.token;
        console.log('@@@@@@@@@@@@@\n');
        console.log(token);
        console.log('@@@@@@@@@@@@@\n');
      })
      .catch((error) => console.error(`${error}`));

    done();
  });

  it('create appointment', async () => {
    const response = await request
      .post('/appointments/create/4')
      .set('access_token', `${token}`);
    console.log(response.body);

    expect(response.status).toBe(200);
  });

  /* 
  it('fetch hours in specific day', async () => {
    const response = await request.get('/days/1');
    console.log(response.body);

    expect(response.status).toBe(200);
  });
  */
});
