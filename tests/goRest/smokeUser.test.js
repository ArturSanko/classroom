import supertest from 'supertest';
import { expect } from 'chai';
import { urls } from '../../data/urls.js';
import { tokens } from '../../data/tokens.js';
import { dataUsers } from '../../data/dataUsers.js';
import { setMethods } from '../../data/setMethods.js';

const request = supertest(urls.goRest);

describe('Users', async () => {
  let userID;
  context('POST method', async () => {
    it('New user was created', async () => {
      const endPoint = 'users';

      const res = await request
        .post(endPoint)
        .set(setMethods.authorization, tokens.goRest)
        .send(dataUsers.dataCreate);

      expect(res.body).to.deep.include(dataUsers.dataCreate);
      userID = res.body.id;
    });
  });

  context('GET method', async () => {
    it('Info was got about user', async () => {
      const endPoint = `users/${userID}`;
      const res = await request
        .get(endPoint)
        .set(setMethods.authorization, tokens.goRest);

      expect(res.body.id).to.equal(userID);
    });
  });

  context('PUT method', async () => {
    it('User was updated', async () => {
      const endPoint = `users/${userID}`;

      const res = await request
        .put(endPoint)
        .set(setMethods.authorization, tokens.goRest)
        .send(dataUsers.dataUpdate);

      expect(res.body).to.deep.include(dataUsers.dataUpdate);
    });
  });

  context('DELETE method', async () => {
    it('User was deleted', async () => {
      const endPoint = `users/${userID}`;
      const res = await request
        .delete(endPoint)
        .set(setMethods.authorization, tokens.goRest);

      expect(res.body).to.be.empty;
    });
  });
});
