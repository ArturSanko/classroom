import supertest from 'supertest';
import { expect } from 'chai';
const request = supertest('https://petstore.swagger.io/v2/');

describe('Pets', () => {
  it('Delete created pet', () => {
    const endPoint = 'pet/5';

    return request.delete(endPoint).then((res) => {
      const data = {
        code: 200,
        type: 'unknown',
        message: '5',
      };

      expect(res.body).to.deep.include(data);
    });
  });
});
