import supertest from 'supertest';
import { expect } from 'chai';
const token =
  'eeea55dff37131907983a341c104a5f510e2aec2ef15ee5ea997eb65a3955769';
const request = supertest('https://gorest.co.in/public/v2/');

describe('Users', () => {
  it('Create new user', () => {
    const endPoint = 'users';

    const data = {
      name: 'apiName',
      email: `test_${Math.floor(Math.random() * (1000 - 1) + 1)}@mail.test`,
      gender: 'male',
      status: 'active',
    };

    return request
      .post(endPoint)
      .set('Authorization', `Bearer ${token}`)
      .send(data)
      .then((res) => {
        console.log(res.body);
        expect(res.body).to.deep.include(data);
      });
  });
});
