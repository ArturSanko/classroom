// var { got } = require('../node_modules/got');
// import got from '../node_modules/got';
import got from 'got';
import { strict as assert } from 'assert';
// var { assert } = require('assert').strict;

describe('Pet', async () => {
  it("Get pet's ID", async () => {
    const response = await got('https://petstore.swagger.io/v2/pet/3');
    const body = JSON.parse(response.body);

    assert(
      body.id === 3,
      `Expacted API to return pet with ID 3, but got ${body.id}`
    );
  });
});
