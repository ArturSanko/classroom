import supertest from 'supertest';
import { expect } from 'chai';
const token =
  'eeea55dff37131907983a341c104a5f510e2aec2ef15ee5ea997eb65a3955769';
const request = supertest('https://gorest.co.in/public/v2/');

describe('Users', async () => {
  let userID;
  context('POST method', async () => {
    it('New user was created', async () => {
      const endPoint = 'users';

      const data = {
        name: 'apiName',
        email: `test_${Math.floor(Math.random() * (1000 - 1) + 1)}@mail.test`,
        gender: 'male',
        status: 'active',
      };

      const res = await request
        .post(endPoint)
        .set('Authorization', `Bearer ${token}`)
        .send(data);

      expect(res.body).to.deep.include(data);
      userID = res.body.id;
    });
  });

  context('GET method', async () => {
    it('Info was got about user', async () => {
      const endPoint = `users/${userID}`;

      const res = await request
        .get(endPoint)
        .set('Authorization', `Bearer ${token}`);

      expect(res.body.id).to.equal(userID);
    });
  });

  context('PUT method', async () => {
    it('User was updated', async () => {
      const endPoint = `users/${userID}`;

      const data = {
        name: 'api_Name',
        email: `test_${Math.floor(Math.random() * (1000 - 1) + 1)}@mail.test`,
        gender: 'female',
        status: 'inactive',
      };

      const res = await request
        .put(endPoint)
        .set('Authorization', `Bearer ${token}`)
        .send(data);

      expect(res.body).to.deep.include(data);
    });
  });

  context('DELETE method', async () => {
    it('User was deleted', async () => {
      const endPoint = `users/${userID}`;

      const res = await request
        .delete(endPoint)
        .set('Authorization', `Bearer ${token}`);

      expect(res.body).to.be.empty;
    });
  });
});
