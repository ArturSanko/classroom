import supertest from 'supertest';
import { expect } from 'chai';
const token =
  'eeea55dff37131907983a341c104a5f510e2aec2ef15ee5ea997eb65a3955769';
const request = supertest('https://gorest.co.in/public/v2/');

describe('Users', () => {
  it('Get users', (done) => {
    request.get(`users?access-token=${token}`).end((err, res) => {
      console.log(err);
      console.log(res.body);
      expect(res.body[0].id).to.equal(2337);
      done();
    });
  });
});
