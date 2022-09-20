import { faker } from '@faker-js/faker';

export let dataUsers = {
  dataCreate: {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    gender: faker.name.sex(),
    status: 'active',
  },
  dataUpdate: {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    gender: faker.name.sex(),
    status: 'active',
  },
  dataInvalid: {
    name: faker.name.firstName(),
    gender: faker.name.sex(),
    status: 'active',
  },
};
