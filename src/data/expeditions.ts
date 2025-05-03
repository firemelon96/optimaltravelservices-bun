export const expeditions = [
  {
    id: 'elnido-coron-expedition-3d2n',
    title: 'El Nido to Coron Expedition (3 Days 2 Nights)',
    destination: 'El Nido to Coron (or Vice Versa)',
    duration: '3 Days 2 Nights',
    description:
      'A once-in-a-lifetime adventure sailing between El Nido and Coron! Explore remote islands, hidden lagoons, and pristine beaches, while camping under the stars and immersing in Palawan’s raw beauty.',
    route: 'El Nido to Coron or Coron to El Nido',
    inclusions: [
      'Expedition boat with licensed crew',
      '2 nights tent camping or native hut accommodation',
      'All meals during expedition (breakfast, lunch, dinner)',
      'Drinking water, coffee, and tea',
      'Use of snorkeling gear',
      'Island entrance/environmental fees',
      'Camping gear (tent, mattress, pillow, blanket)',
      'Tour guide',
    ],
    exclusions: [
      'Land transfers to starting/ending ports (optional add-on)',
      'Alcoholic drinks and snacks (available for purchase onboard)',
      'Personal travel insurance',
      'Tips and gratuities',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Departure from El Nido / Coron',
        description:
          'Board the expedition boat in the morning. Visit 2–3 islands, snorkeling spots, and beaches. Set up camp on a remote island.',
        activities: ['Cadlao Lagoon', 'Darocotan Island', 'Cagbatan Island'],
      },
      {
        day: 2,
        title: 'Full Day Expedition',
        description:
          'Continue cruising through Linapacan’s remote gems. Snorkel vibrant reefs and relax on isolated beaches. Camp overnight on another island.',
        activities: ['Culion Island', 'Ditaytayan Island', 'Malcapuya Island'],
      },
      {
        day: 3,
        title: 'Arrival at Coron / El Nido',
        description:
          'Final island hopping. Arrive at Coron town or El Nido by late afternoon. Farewell!',
        activities: ['Pass Island', 'Coron Bay'],
      },
    ],
    pricing: [
      {
        type: 'per_person',
        amount: 14500,
        currency: 'PHP',
        description: 'Expedition package (per person)',
      },
    ],
    notes: [
      'Route and stops may vary based on weather and sea conditions.',
      'No luxury — this is an adventure-style, back-to-basics expedition!',
      'Electricity is limited; bring power banks and waterproof bags.',
      'Pack light: quick-dry clothes, swimwear, reef-safe sunscreen, flashlight.',
    ],
    options: [
      {
        title: 'Private Expeditions',
        description:
          'Available for groups (6 pax and above) — customizable route and exclusive boat.',
      },
      {
        title: 'Land Transfer Add-ons',
        description:
          'Optional van transfer from Puerto Princesa to El Nido or Coron Airport pickup.',
      },
    ],
    images: [
      'https://cdn.palawanwebsolutions.com/expeditions/expedition01.avif',
      'https://cdn.palawanwebsolutions.com/expeditions/expedition02.avif',
      'https://cdn.palawanwebsolutions.com/expeditions/expedition03.avif',
    ],
  },
];
