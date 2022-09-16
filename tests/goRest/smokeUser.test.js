import supertest from 'supertest';
import { expect } from 'chai';
const token =
  'eeea55dff37131907983a341c104a5f510e2aec2ef15ee5ea997eb65a3955769';
const request = supertest('https://gorest.co.in/public/v2/');

describe('Users', () => {
  let userID;
  context('POST method', () => {
    it('New user was created', () => {
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
          expect(res.body).to.deep.include(data);
          userID = res.body.id;
        });
    });
  });

  context('GET method', () => {
    it("Info was got about user", () => {
      const endPoint = `users/${userID}`;

      return request
        .get(endPoint)
        .set('Authorization', `Bearer ${token}`)
        .then((res) => {
          expect(res.body.id).to.equal(userID);
        });
    });
  });

  context('PUT method', () => {
    it('User was updated', () => {
      const endPoint = `users/${userID}`;

      const data = {
        name: 'api_Name',
        email: `test_${Math.floor(Math.random() * (1000 - 1) + 1)}@mail.test`,
        gender: 'female',
        status: 'inactive',
      };

      return request
        .put(endPoint)
        .set('Authorization', `Bearer ${token}`)
        .send(data)
        .then((res) => {
          expect(res.body).to.deep.include(data);
        });
    });
  });

  context('DELETE method', () => {
    it('User was deleted', () => {
        const endPoint = `users/${userID}`;

      return request
        .delete(endPoint)
        .set('Authorization', `Bearer ${token}`)
        .then((res) => {
          expect(res.body).to.be.empty;
        });
    });
  });
});
