import { strict as assert } from 'assert';
import { PetController } from '../api/controller/pet.controller.js';
const pet = new PetController();

describe('Pet', async () => {
  it("Get pet's tag", async () => {
    const body = await pet.findByTags('tag1');
    assert(body.length > 0);
    assert(
      body.every(
        (pet) => pet.tags.some((tag) => tag.name === 'tag1'),
        'Every returnd pet must contain tag1'
      )
    );
  });
});
