import supertest from 'supertest';
import { expect } from 'chai';
const request = supertest('https://petstore.swagger.io/v2/');

describe('Pets', () => {
  it("Get pet's id", () => {
    return request.get('pet/3').then((res) => {
      console.log(res.body);
      expect(res.body.id).to.equal(3);
    });
  });
});
