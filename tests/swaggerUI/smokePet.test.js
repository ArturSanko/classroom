import supertest from 'supertest';
import { expect } from 'chai';
const request = supertest('https://petstore.swagger.io/v2/');

describe('Pets', () => {
  let petID;
  context('POST method', () => {
    it('New pet was created', () => {
      const endPoint = 'pet';

      const data = {
        category: {
          id: Math.floor(Math.random() * (10 - 1) + 1),
          name: `type_${Math.floor(Math.random() * (10 - 1) + 1)}`,
        },
        name: `name_${Math.floor(Math.random() * (10 - 1) + 1)}`,
        photoUrls: ['string'],
        tags: [
          {
            id: Math.floor(Math.random() * (10 - 1) + 1),
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
          petID = res.body.id;
        });
    });
  });

  context('GET method', () => {
    it('Info was got about pet', () => {
      const endPoint = `pet/${petID}`;

      return request.get(endPoint).then((res) => {
        expect(res.body.id).to.equal(petID);
        console.log(res.body);
      });
    });
  });

  context('PUT method', () => {
    it('Pet was updated', () => {
      const endPoint = 'pet';

      const data = {
        id: petID,
        category: {
          id: Math.floor(Math.random() * (10 - 1) + 1),
          name: `type_${Math.floor(Math.random() * (10 - 1) + 1)}`,
        },
        name: `name_${Math.floor(Math.random() * (10 - 1) + 1)}`,
        photoUrls: ['string'],
        tags: [
          {
            id: Math.floor(Math.random() * (10 - 1) + 1),
            name: 'string',
          },
        ],
        status: 'available',
      };

      return request
        .put(endPoint)
        .send(data)
        .then((res) => {
          expect(res.body).to.deep.include(data);
          console.log(res.body);
        });
    });
  });

  context('DELETE method', () => {
    it('Pet was deleted', () => {
      const endPoint = `pet/${petID}`;

      return request.delete(endPoint).then((res) => {
        const data = {
          code: 200,
          type: 'unknown',
          message: `${petID}`,
        };

        expect(res.body).to.deep.include(data);
      });
    });
  });
});
