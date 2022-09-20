import { strict as assert } from 'assert';
import { PetController } from '../api/controller/pet.controller.js';
const pet = new PetController();

describe('Pet', async () => {
  it('Update added one', async () => {
    const newerPet = {
      id: 1,
      category: {
        id: 1,
        name: 'string',
      },
      name: 'doggie',
      photoUrls: ['string'],
      tags: [
        {
          id: 1,
          name: 'string',
        },
      ],
      status: 'available',
    };
    const updatedPet = await pet.update(newerPet);
    assert.deepEqual(
      updatedPet,
      newerPet,
      'Expected updated pet to equal data used upon updating'
    );
  });
});
