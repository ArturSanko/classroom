import { strict as assert } from 'assert';
import { PetController } from '../api/controller/pet.controller.js';
const pet = new PetController();

describe('Pet', async () => {
  it("Get pet's ID", async () => {
    const body = await pet.getById(3);
    assert(
      body.id === 3,
      `Expacted API to return pet with ID 3, but got ${body.id}`
    );
  });
});
