import { strict as assert } from 'assert';
import { PetController } from '../api/controller/pet.controller.js';
const pet = new PetController();

describe('Pet', async () => {
  it("Get pet's status available", async () => {
    const body = await pet.findByStatus('available');
    assert(body.length > 0);
  });

  it("Get pet's status pending", async () => {
    const body = await pet.findByStatus('pending');
    assert(body.length > 0);
  });

  it("Get pet's status sold", async () => {
    const body = await pet.findByStatus('sold');
    assert(body.length > 0);
  });

  it("Get pet's status pending and available", async () => {
    const body = await pet.findByStatus('pending', 'available');
    assert(body.length > 0);
    assert(body.some((pet) => pet.status === 'available'));
    assert(body.some((pet) => pet.status === 'pending'));
    assert(!body.some((pet) => pet.status === 'sold'));
  });
});
