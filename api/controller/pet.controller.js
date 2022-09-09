import got from 'got';

export class PetController {
  async getById(id) {
    const response = await got(`https://petstore.swagger.io/v2/pet/${id}`);
    return JSON.parse(response.body);
  }

  async findByTags(...tags) {
    const response = await got(
      `https://petstore.swagger.io/v2/pet/findByTags`,
      {
        searchParams: new URLSearchParams({ tags: tags }),
      }
    );
    return JSON.parse(response.body);
  }

  async findByStatus(...status) {
    const response = await got(
      `https://petstore.swagger.io/v2/pet/findByStatus`,
      {
        searchParams: new URLSearchParams({ status: status }),
      }
    );
    return JSON.parse(response.body);
  }

  async addNew(jsonPet) {
    const response = await got(`https://petstore.swagger.io/v2/pet`, {
      method: 'POST',
      json: jsonPet,
    });
    return JSON.parse(response.body);
  }

  async delete(id) {
    const response = await got(`https://petstore.swagger.io/v2/pet/${id}`, {
      method: 'DELETE',
    });
    return JSON.parse(response.body);
  }

  async update(jsonPet) {
    const response = await got(`https://petstore.swagger.io/v2/pet`, {
      method: 'PUT',
      json: jsonPet,
    });
    return JSON.parse(response.body);
  }
}
