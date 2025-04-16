export const tours = [
  {
    id: 'id01',
    type: 'Day Tour',
    address: 'puerto princesa',
    name: 'City Tour',
    description: 'This is the city tour for your service',
    itinerary: [
      {
        label: 'Place to visit',
        destinations: ['Baywalk', 'Mitras Ranch'],
      },
    ],
    inclusions: ['water', 'light snacks'],
    exlusions: ['anything not mentioned', 'Expense'],
    images: [],
  },
  {
    id: 'id02',
    name: 'Package Tour',
    type: 'Package Tour',
    address: 'puerto princesa',
    description: 'This is the city tour for your service',
    itinerary: [
      {
        label: 'Day 1',
        destinations: ['Baywalk', 'Mitras Ranch'],
      },
      {
        label: 'Day 2',
        destinations: ['Baywalk', 'Mitras Ranch'],
      },
    ],
    inclusions: ['water', 'light snacks'],
    exlusions: ['anything not mentioned', 'Expense'],
    images: [],
  },
];
