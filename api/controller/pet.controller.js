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
}

