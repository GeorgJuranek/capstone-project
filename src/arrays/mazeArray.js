export const mazeArray = [
  {
    id: 0,
    path: 'cave/start/',
    type: 'start',
    next: 'middle',
    prev: null,
  },
  {
    id: 1,
    path: 'cave/start/middle/',
    type: 'middle',
    next: 'end',
    prev: 'cave/start/',
  },
  {
    id: 2,
    path: 'cave/start/middle/end/',
    type: 'end',
    next: null,
    prev: 'cave/start/middle/',
  },
];
