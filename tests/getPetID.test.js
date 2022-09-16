import supertest from 'supertest';
import { expect } from 'chai';
// const request = supertest('https://gorest.co.in/public/v2/');
const request = supertest('https://petstore.swagger.io/v2/');

describe('Pets', async () => {
  it("Get pet's id", async () => {
    //done
    await request.get('pet/0').end((err, res) => {
      console.log(err);
      console.log(res.body);
      expect(res.body.id).to.equal(1);
      //done()
    });
  });
});
