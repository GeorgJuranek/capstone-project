export const mazeArray = [
  {
    id: 0,
    path: 'maze/start/',
    type: 'start',
    next: 'middle',
    prev: null,
    image: '../../images/mazeRooms/mazeEnd.png',
  },
  {
    id: 1,
    path: 'maze/start/middle/',
    type: 'middle',
    next: 'end',
    prev: 'maze/start/',
    image: '../../images/mazeRooms/mazeWay.png',
  },
  {
    id: 2,
    path: 'maze/start/middle/end/',
    type: 'end',
    next: null,
    prev: 'maze/start/middle/',
    image: '../../images/mazeRooms/mazeEnd.png',
  },
];
