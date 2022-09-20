import supertest from 'supertest';
import { expect } from 'chai';
import { urls } from '../../data/urls.js';
import { dataPets } from '../../data/dataPets.js';

const request = supertest(urls.swaggerIO);

describe('Pets', async () => {
  let petID;
  context('POST method', async () => {
    it('New pet was created', async () => {
      const endPoint = 'pet';

      const res = await request.post(endPoint).send(dataPets.dataCreate);

      expect(res.body).to.deep.include(dataPets.dataCreate);
      petID = res.body.id;
    });
  });

  context('GET method', async () => {
    it('Info was got about pet', async () => {
      const endPoint = `pet/${petID}`;

      const res = await request.get(endPoint);
      expect(res.body.id).to.equal(petID);
    });
  });

  context('PUT method', async () => {
    it('Pet was updated', async () => {
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

      const res = await request.put(endPoint).send(data);

      expect(res.body).to.deep.include(data);
    });
  });

  context('DELETE method', async () => {
    it('Pet was deleted', async () => {
      const endPoint = `pet/${petID}`;

      const res = await request.delete(endPoint);

      const data = {
        code: 200,
        type: 'unknown',
        message: `${petID}`,
      };

      expect(res.body).to.deep.include();
    });
  });
});
