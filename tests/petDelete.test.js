import { strict as assert } from 'assert';
import { PetController } from '../api/controller/pet.controller.js';
const pet = new PetController();

describe('Pet', async () => {
  it('Delete added one', async () => {
    const deletedPet = await pet.delete(0);
  });
});
