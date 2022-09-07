var { got } = require('got');
var { assert } = require('assert').strict;

describe('Pet', async () => {
  it("Get pet's ID", async () => {
    const response = await got('https://petstore.swagger.io/pet/1');
    const body = JSON.parse(response.body);

    assert(
      body.id === 1,
      `Expacted API to return pet with ID 1, but got ${body.id}`
    );
  });
});
