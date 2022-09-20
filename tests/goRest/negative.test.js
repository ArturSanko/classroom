import supertest from 'supertest';
import { expect } from 'chai';
import { urls } from '../../data/urls.js';
import { tokens } from '../../data/tokens.js';
import { dataUsers } from '../../data/dataUsers.js';
import { setMethods } from '../../data/setMethods.js';

const request = supertest(urls.goRest);

describe('Negative tests', async () => {
  it('401: Authentication failed', async () => {
    const endPoint = 'users';

    const res = await request.post(endPoint).send(dataUsers.dataCreate);

    expect(res.statusCode).to.eq(401);
    expect(res._body.message).to.eq('Authentication failed');
  });

  it('422: Data validation failed', async () => {
    const endPoint = 'users';

    const res = await request
      .post(endPoint)
      .set(setMethods.authorization, tokens.goRest)
      .send(dataUsers.dataInvalid);

    expect(res.statusCode).to.eq(422);
    expect(res._body[0].message).to.eq("can't be blank");
  });
});
