const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);


describe('API Endpoint Testing', () => {

  it("gets the similar properties endpoint", async (done) => {
    const response = await request.get('/similarprops');
    expect(response.status).toBe(200);
    done();
  });

});



