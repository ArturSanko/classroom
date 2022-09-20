export let dataPets = {
  dataCreate: {
    category: {
      id: Math.floor(Math.random() * (10 - 1) + 1),
      name: `type_${Math.floor(Math.random() * (10 - 1) + 1)}`,
    },
    name: `name_${Math.floor(Math.random() * (10 - 1) + 1)}`,
    photoUrls: ['string'],
    tags: [
      {
        id: Math.floor(Math.random() * (10 - 1) + 1),
        name: 'string',
      },
    ],
    status: 'available',
  },

  dataUpdate: {
    id: petID,
    category: {
      id: Math.floor(Math.random() * (10 - 1) + 1),
      name: `type_${Math.floor(Math.random() * (10 - 1) + 1)}`,
    },
    name: `name_${Math.floor(Math.random() * (10 - 1) + 1)}`,
    photoUrls: ['string'],
    tags: [
      {
        id: Math.floor(Math.random() * (10 - 1) + 1),
        name: 'string',
      },
    ],
    status: 'inavailable',
  },

  dataDeleteResponse: {
    code: 200,
    type: 'unknown',
    message: `${petID}`,
  },
};
