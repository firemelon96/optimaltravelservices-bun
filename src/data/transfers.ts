export const transfers = [
  {
    id: 'transfer00',
    title: 'Puerto Princesa to El Nido',
    description: 'the description',
    images: [],
  },
  {
    id: 'transfer01',
    title: 'El Nido to Puerto Princesa',
    description: 'the description',
    images: [],
  },
  {
    id: 'transfer02',
    title: 'El Nido to Port Barton',
    description: 'the description',
    images: [],
  },
  {
    id: 'puerto-princesa-to-elnido',
    title: 'Puerto Princesa to El Nido Van Transfer',
    origin: 'Puerto Princesa',
    destination: 'El Nido',
    type: 'shared', // can be 'shared' or 'private'
    description:
      'Convenient and comfortable van transfer from Puerto Princesa City to El Nido. Enjoy scenic views of Palawan during the 5–6 hour land journey.',
    duration: '5–6 hours',
    schedule: [
      {
        type: 'shared',
        departures: [
          '04:00 AM',
          '07:00 AM',
          '10:00 AM',
          '01:00 PM',
          '04:00 PM',
          '06:00 PM',
        ],
      },
      {
        type: 'private',
        departures: ['Flexible Schedule (on request)'],
      },
    ],
    inclusions: [
      'Air-conditioned van',
      'Professional driver',
      'Fuel and toll fees',
      'Free pickup from Puerto Princesa city proper hotels',
      'Drop-off at El Nido Transport Terminal or selected hotels',
    ],
    exclusions: [
      'Meals/snacks',
      'Terminal/environmental fees (if applicable)',
      'Hotel-to-hotel drop off in remote areas (add-on)',
    ],
    pricing: [
      {
        type: 'shared',
        amount: 700,
        currency: 'PHP',
        per: 'person',
        description: 'Shared van transfer (per person)',
      },
      {
        type: 'private',
        amount: 6000,
        currency: 'PHP',
        per: 'van',
        description: 'Private van transfer (max 10 pax)',
      },
    ],
    notes: [
      'Travel time may vary due to road/weather conditions.',
      'Early booking is recommended, especially during peak season.',
      'Passengers must arrive 30 minutes before departure time.',
    ],
  },
];
