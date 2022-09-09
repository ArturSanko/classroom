import { strict as assert } from 'assert';
import { PetController } from '../api/controller/pet.controller.js';
const pet = new PetController();

describe('Pet', async () => {
  it('Added new one', async () => {
    const petToCreate = {
      id: 0,
      category: {
        id: 0,
        name: 'string',
      },
      name: 'doggie',
      photoUrls: ['string'],
      tags: [
        {
          id: 0,
          name: 'string',
        },
      ],
      status: 'available',
    };
    const addedPet = await pet.addNew(petToCreate);
    assert.deepEqual(
      addedPet,
      { ...petToCreate, id: addedPet.id },
      'Expected created pet to match data used upon creation'
    );

    const foundAddedPet = await pet.getById(addedPet.id);
    assert.deepEqual(
      foundAddedPet,
      { ...petToCreate, id: addedPet.id },
      'Expected found pet to match created pet'
    );
  });
});
