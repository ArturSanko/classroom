import supertest from 'supertest';
import { expect } from 'chai';
const request = supertest('https://petstore.swagger.io/v2/');

describe('Pets', () => {
  it('Create new pet', () => {
    const endPoint = 'pet';

    const data = {
      category: {
        id: 666,
        name: 'may',
      },
      name: 'cat',
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
      .post(endPoint)
      .send(data)
      .then((res) => {
        console.log(res.body);
        expect(res.body).to.deep.include(data);
      });
  });
});
