import supertest from 'supertest';
import { expect } from 'chai';
const request = supertest('https://petstore.swagger.io/v2/');

describe('Pets', () => {
  it("Get pet's id", () => {
    return request.get('pet/findByStatus?status=available').then((res) => {
      for (let i = 0; i < res.body.length; i++) {
        expect(res.body[i].status).to.equal('available');
      }
    });
  });
});
