export const mazeArray = [
  {
    id: 0,
    path: 'maze/start/',
    type: 'start',
    next: ['passage'],
    prev: null,
  },
  {
    id: 1,
    path: 'maze/start/passage/',
    type: 'passage',
    next: ['splitways'],
    prev: 'maze/start/',
  },
  //DECISION: LEFT or RIGHT
  {
    id: 2,
    path: 'maze/start/passage/splitways/',
    type: 'splitways',
    next: ['left', 'right'],
    prev: 'maze/start/passage/',
  },
  //LEFT CHOICE
  {
    id: 4,
    path: 'maze/start/passage/splitways/left/',
    type: 'passage',
    next: ['end'],
    prev: 'maze/start/passage/splitways/',
  },
  {
    id: 5,
    path: 'maze/start/passage/splitways/left/end/',
    type: 'end',
    next: null,
    prev: 'maze/start/passage/splitways/left/',
  },
  //RIGHT CHOICE
  {
    id: 6,
    path: 'maze/start/passage/splitways/right/',
    type: 'passage',
    next: ['end'],
    prev: 'maze/start/passage/splitways/',
  },
  {
    id: 7,
    path: 'maze/start/passage/splitways/right/end/',
    type: 'end',
    next: null,
    prev: 'maze/start/passage/splitways/right/',
  },
];
