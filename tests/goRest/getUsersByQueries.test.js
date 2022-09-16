import supertest from 'supertest';
import { expect } from 'chai';
const token =
  'eeea55dff37131907983a341c104a5f510e2aec2ef15ee5ea997eb65a3955769';
const request = supertest('https://gorest.co.in/public/v2/');

describe('Users', () => {
  it("Get users' queries", () => {
    const url = `users?access-token=${token}?page=2&gender=male&status=active`;
    return request.get(url).then((res) => {
      for (let i = 0; i < res.body.length; i++) {
        expect(res.body[i].gender).to.equal('male');
        expect(res.body[i].status).to.equal('active');
      }
    });
  });
});
