const supertest = require('supertest');
const axios = require('axios');
const app = require('../src/app');

// const UserModel = require('../src/models/user');
// const { defaultUser1, defaultUser2 } = require('./defaultModels');

const request = supertest(app);

// let user;

describe('Days', () => {
  beforeEach(async (done) => {
    axios({
      method: 'post',
      url: 'http://auth-api1:5000/token-auth',
      data: {
        email: 'haku@email.com',
        password: 'testing',
      },
    })
      .then((/* response */) => {
        // console.log(response.data.token);
      })
      .catch((error) => console.error(`${error}`));

    done();
  });

  // SignUp
  it('should be able to create user', async () => {
    const response = await request.get('/days');
    console.log(response.body);

    expect(response.status).toBe(200);
  });
});
