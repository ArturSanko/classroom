import supertest from 'supertest';
import { expect } from 'chai';
const token =
  'eeea55dff37131907983a341c104a5f510e2aec2ef15ee5ea997eb65a3955769';
const request = supertest('https://gorest.co.in/public/v2/');

describe('Users', () => {
  it("Get users' id", () => {
    return request.get(`users/2327?access-token=${token}`).then((res) => {
      expect(res.body.id).to.equal(2327);
    });
  });
});
