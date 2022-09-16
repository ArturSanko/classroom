import supertest from 'supertest';
import { expect } from 'chai';
const request = supertest('https://petstore.swagger.io/v2/');

describe('Pets', () => {
  it("Get pet's id", (done) => {
    request.get('pet/3').end((err, res) => {
      console.log(err);
      console.log(res.body);
      expect(res.body.id).to.equal(3);
      done();
    });
  });
});
