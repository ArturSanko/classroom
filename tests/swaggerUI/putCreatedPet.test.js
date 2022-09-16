import supertest from 'supertest';
import { expect } from 'chai';
const request = supertest('https://petstore.swagger.io/v2/');

describe('Pets', () => {
  it('Update created pet', () => {
    const endPoint = 'pet';

    const data = {
      id: 3,
      category: {
        id: 333,
        name: 'my',
      },
      name: 'cow',
      photoUrls: ['string'],
      tags: [
        {
          id: 0,
          name: 'string',
        },
      ],
      status: 'available',
    };

    return request
      .put(endPoint)
      .send(data)
      .then((res) => {
        console.log(res.body);
        expect(res.body).to.deep.include(data);
      });
  });
});
