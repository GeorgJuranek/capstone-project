import {nanoid} from 'nanoid';

import binItem from '../images/itemSprites/binItem.png';
import officeItem from '../images/itemSprites/officeItem.png';
import {officePositionCss} from '../stylesheet/StyledImages.js';
import {binPositionCss} from '../stylesheet/StyledImages.js';

export const mazeArray = [
  {
    id: 0,
    path: 'maze/start/',
    type: 'start',
    next: ['passage'],
    prev: null,
    items: [
      {
        id: nanoid(),
        css: officePositionCss,
        name: 'myOffice.item',
        image: officeItem,
        altText: 'this is your office',
        info: 'This is your office. The screen shows some notes you did earlier: "Always remember: 1.) ask for room you are IN with pwd and confirm with enter, then 2.) ask for places to go FROM HERE ls and enter, then 3.) go somewhere typing cd AND what you got from ls. I hope this will work out fine..." ',
      },
    ],
  },
  {
    id: 1,
    path: 'maze/start/passage/',
    type: 'passage',
    next: ['splitways'],
    prev: 'maze/start/',
    items: [],
  },
  //DECISION: LEFT or RIGHT
  {
    id: 2,
    path: 'maze/start/passage/splitways/',
    type: 'splitways',
    next: ['left', 'right'],
    prev: 'maze/start/passage/',
    items: [],
  },
  //LEFT PATH CHOICE
  {
    id: 4,
    path: 'maze/start/passage/splitways/left/',
    type: 'passage',
    next: ['end'],
    prev: 'maze/start/passage/splitways/',
    items: [],
  },
  {
    id: 5,
    path: 'maze/start/passage/splitways/left/end/',
    type: 'end',
    next: null,
    prev: 'maze/start/passage/splitways/left/',
    items: [
      {
        id: nanoid(),
        css: binPositionCss,
        name: 'bin.item',
        image: binItem,
        altText: 'this is your office',
        info: 'You find a note in the bin that says: "IMPORTANT NOTE: I can teleport back by typing "cd .." IMPORTANT NOTE FOR IMPORTANT NOTE: I should keep this cheatsheet always with me so i dont forget this important spell -signed: foobar"',
      },
    ],
  },
  //RIGHT PATH CHOICE
  {
    id: 6,
    path: 'maze/start/passage/splitways/right/',
    type: 'passage',
    next: ['end'],
    prev: 'maze/start/passage/splitways/',
    items: [],
  },
  {
    id: 7,
    path: 'maze/start/passage/splitways/right/end/',
    type: 'end',
    next: null,
    prev: 'maze/start/passage/splitways/right/',
    items: [],
  },
];
