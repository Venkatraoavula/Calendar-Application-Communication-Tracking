export const DEFAULT_COMMUNICATION_PERIODICITY = '2 weeks';

export const COMMUNICATION_METHODS = [
  {
    name: 'LinkedIn Post',
    description: 'Post on the company’s LinkedIn page.',
    sequence: 1,
    mandatory: true,
  },
  {
    name: 'LinkedIn Message',
    description: 'Direct message to the company via LinkedIn.',
    sequence: 2,
    mandatory: false,
  },
  {
    name: 'Email',
    description: 'Email communication with the company.',
    sequence: 3,
    mandatory: true,
  },
  {
    name: 'Phone Call',
    description: 'Direct phone call to the company.',
    sequence: 4,
    mandatory: false,
  },
  {
    name: 'Other',
    description: 'Any other form of communication.',
    sequence: 5,
    mandatory: false,
  },
];