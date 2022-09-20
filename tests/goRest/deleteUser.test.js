import supertest from 'supertest';
import { expect } from 'chai';
const token =
  'eeea55dff37131907983a341c104a5f510e2aec2ef15ee5ea997eb65a3955769';
const request = supertest('https://gorest.co.in/public/v2/');

describe('Users', () => {
  it('Delete created user', () => {
    const endPoint = 'users/3010';

    return request
      .delete(endPoint)
      .set('Authorization', `Bearer ${token}`)
      .then((res) => {
        expect(res.body).to.be.empty;
      });
  });
});
