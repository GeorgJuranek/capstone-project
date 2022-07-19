import {nanoid} from 'nanoid';

import wizardXyzzy from '../images/charSprites/wizardXyzzy.png';
import archive0 from '../images/itemSprites/archive0.png';
import archive1 from '../images/itemSprites/archive1.png';
import archive2 from '../images/itemSprites/archive2.png';
import bin from '../images/itemSprites/bin.png';
import coffee from '../images/itemSprites/coffee.png';
import flower from '../images/itemSprites/flower.png';
import office from '../images/itemSprites/office.png';
import studentslist from '../images/itemSprites/studentslist.png';
import toilet from '../images/itemSprites/toilet.png';
import urinals from '../images/itemSprites/urinals.png';
import window from '../images/itemSprites/window.png';
import xyzzyDesktop from '../images/itemSprites/xyzzyDesktop.png';
import {archivePosition} from '../stylesheet/StyledImages.js';
import {officePosition} from '../stylesheet/StyledImages.js';
import {binPosition} from '../stylesheet/StyledImages.js';
import {coffeePosition} from '../stylesheet/StyledImages.js';
import {flowerPosition} from '../stylesheet/StyledImages.js';
import {urinalsPosition} from '../stylesheet/StyledImages.js';
import {wizardXyzzyPosition} from '../stylesheet/StyledImages.js';
import {studentslistPosition} from '../stylesheet/StyledImages.js';
import {toiletPosition} from '../stylesheet/StyledImages.js';
import {windowPosition} from '../stylesheet/StyledImages.js';

export const mazeArray = [
  {
    id: 0,
    path: 'maze/home/',
    type: 'chamber',
    posName: 'home',
    next: ['hall'],
    prev: null,
    items: [
      {
        id: nanoid(),
        css: officePosition,
        name: 'desk.itm',
        image: office,
        altText: 'this is your office',
        info: 'This is your office. The screen shows some notes you did earlier: "Always remember: 1.) ask for room you are IN with pwd and confirm with enter, then 2.) ask for places to go FROM HERE ls and enter, then 3.) go somewhere typing cd AND what you got from ls. I hope this will work out fine..." ',
      },
      {
        id: nanoid(),
        css: flowerPosition,
        name: 'flower.itm',
        image: flower,
        altText: 'this is a beautiful flower on your desk',
        info: "to look at the flower on your desk fulfilles you with calmness and confidence, eventhough you are a little big allergic to it, but its not that bad so you don't care that much",
      },
    ],
  },
  {
    id: 1,
    path: 'maze/home/hall/',
    type: 'hall',
    posName: 'hall',
    next: ['fork'],
    prev: 'maze/home/',
    items: [],
  },
  // I. L/R CHOICE
  {
    id: 2,
    path: 'maze/home/hall/fork/',
    type: 'fork',
    posName: 'fork',
    next: ['left', 'right'],
    prev: 'maze/home/hall/',
    items: [],
  },
  //LEFT PATH
  {
    id: 3,
    path: 'maze/home/hall/fork/left/',
    type: 'hall',
    posName: 'left',
    next: ['junk'],
    prev: 'maze/home/hall/fork/',
    items: [],
  },
  {
    id: 4,
    path: 'maze/home/hall/fork/left/junk/',
    type: 'chamber',
    posName: 'junk',
    next: null,
    prev: 'maze/home/hall/fork/left/',
    items: [
      {
        id: nanoid(),
        css: binPosition,
        name: 'bin.itm',
        image: bin,
        altText: 'this is your office',
        info: 'You find a note in the bin that says: "IMPORTANT NOTE: I can teleport back by typing "cd .." IMPORTANT NOTE FOR IMPORTANT NOTE: I should keep this cheatsheet always with me so i dont forget this important spell -signed: foobar"',
      },
    ], //END
  },
  // RIGHT PATH // II. L/R CHOICE
  {
    id: 5,
    path: 'maze/home/hall/fork/right/',
    type: 'fork2',
    posName: 'right',
    next: ['left', 'right'],
    prev: 'maze/home/hall/fork/',
    items: [],
  },
  //RIGHT RIGHT
  {
    id: 6,
    path: 'maze/home/hall/fork/right/right/',
    type: 'chamber',
    posName: 'right',
    next: null,
    prev: 'maze/home/hall/fork/right/',
    items: [
      {
        id: nanoid(),
        css: coffeePosition,
        name: 'coffee.itm',
        image: coffee,
        altText: 'this is a table with a can of coffee and a mug, a straw is put into',
        info: 'You find coffee! finally! yay! but when you check it, you recognize that its freezing cold. No milk or sugar. Oh wait! Under the mug is a little note written on the corner of a halved napkin: "- ...p..lease dont screw it up this time, just remember: by typing "cd .." you can easily go back"',
      },
    ], //END
  },
  //RIGHT LEFT
  {
    id: 7,
    path: 'maze/home/hall/fork/right/left/',
    type: 'hall',
    posName: 'left',
    next: ['lobby'],
    prev: 'maze/home/hall/fork/right/',
    items: [],
  },
  //LOBBY//
  {
    id: 8,
    path: 'maze/home/hall/fork/right/left/lobby/',
    type: 'lobby',
    posName: 'lobby',
    next: ['junction'],
    prev: 'maze/home/hall/fork/right/left/',
    items: [],
  },
  //X JUNCTION X//
  {
    id: 9,
    path: 'maze/home/hall/fork/right/left/lobby/junction/',
    type: 'junction',
    posName: 'junction',
    next: ['lib', 'privacy'],
    prev: 'maze/home/hall/fork/right/left/lobby/',
    items: [
      {
        id: nanoid(),
        css: studentslistPosition,
        name: 'studentslist.itm',
        image: studentslist,
        altText: 'this wall has drawings of the wizardry-students foobar and xyzzy',
        info: 'this wall shows the magistry-novices and their honourable past accomplishments. foobar: I, xyzzy: IIIII',
      },
    ],
  },
  //LIBRARY//
  {
    id: 10,
    path: 'maze/home/hall/fork/right/left/lobby/junction/lib/',
    type: 'lib',
    posName: 'lib',
    next: ['reception'],
    prev: 'maze/home/hall/fork/right/left/lobby/junction/',
    items: [],
  },
  // CHOICE at Library reception
  {
    id: 11,
    path: 'maze/home/hall/fork/right/left/lobby/junction/lib/reception/',
    type: 'reception',
    posName: 'reception',
    next: ['office', 'archives'],
    prev: 'maze/home/hall/fork/right/left/lobby/junction/lib/',
    items: [],
  },
  // office of xyzzy
  {
    id: 12,
    path: 'maze/home/hall/fork/right/left/lobby/junction/lib/reception/office/',
    type: 'chamber',
    posName: 'office',
    next: null,
    prev: 'maze/home/hall/fork/right/left/lobby/junction/lib/reception/',
    items: [
      {
        id: nanoid(),
        css: officePosition,
        name: 'desktop.itm',
        image: xyzzyDesktop,
        altText: 'this is another desktop',
        info: 'this is the desktop of your fellow student xyzzy. seems like he is is really up to something.',
      },
      {
        id: nanoid(),
        css: windowPosition,
        name: 'window.itm',
        image: window,
        altText: 'this is a window with a blue and purple sunset, but behind bars',
        info: 'looking out of the window you see a beautiful sunset. the view on the horizon makes you feel yearning and adventurous.',
      },
    ],
  }, //END
  // archives
  {
    id: 13,
    path: 'maze/home/hall/fork/right/left/lobby/junction/lib/reception/archives/',
    type: 'fork',
    posName: 'archives',
    next: ['archive0', 'next'],
    prev: 'maze/home/hall/fork/right/left/lobby/junction/lib/reception/',
    items: [],
  },
  {
    id: 14,
    path: 'maze/home/hall/fork/right/left/lobby/junction/lib/reception/archives/archive0/',
    type: 'chamber',
    posName: 'archive0',
    next: null,
    prev: 'maze/home/hall/fork/right/left/lobby/junction/lib/reception/archives/',
    items: [
      {
        id: nanoid(),
        css: archivePosition,
        name: 'archive.itm',
        image: archive0,
        altText: 'this is a cluttering file cabinet',
        info: 'this is a cluttering, old and dusty file cabinet. Looking at it stresses you out.',
      },
    ], //END
  },
  {
    id: 15,
    path: 'maze/home/hall/fork/right/left/lobby/junction/lib/reception/archives/next/',
    type: 'fork2',
    posName: 'next',
    next: ['archive1', 'next'],
    prev: 'maze/home/hall/fork/right/left/lobby/junction/lib/reception/archives/',
    items: [],
  },
  {
    id: 17,
    path: 'maze/home/hall/fork/right/left/lobby/junction/lib/reception/archives/next/archive1/',
    type: 'chamber',
    posName: 'archive1',
    next: null,
    prev: 'maze/home/hall/fork/right/left/lobby/junction/lib/reception/archives/next/',
    items: [
      {
        id: nanoid(),
        css: archivePosition,
        name: 'archive.itm',
        image: archive1,
        altText: 'this is a cluttering file cabinet',
        info: 'this is a cluttering, old and dusty file cabinet. Looking at it stresses you out.',
      },
    ], //END
  },
  {
    id: 17,
    path: 'maze/home/hall/fork/right/left/lobby/junction/lib/reception/archives/next/next/',
    type: 'fork',
    posName: 'next',
    next: ['archive2', 'storage'],
    prev: 'maze/home/hall/fork/right/left/lobby/junction/lib/reception/archives/next/',
    items: [],
  },
  {
    id: 18,
    path: 'maze/home/hall/fork/right/left/lobby/junction/lib/reception/archives/next/next/archive2/',
    type: 'chamber',
    posName: 'archive2',
    next: null,
    prev: 'maze/home/hall/fork/right/left/lobby/junction/lib/reception/archives/next/', //haunting detail
    items: [
      {
        id: nanoid(),
        css: archivePosition,
        name: 'archive.itm',
        image: archive2,
        altText: 'this is a cluttering file cabinet',
        info: 'this is a cluttering, old and dusty file cabinet. Looking at it stresses you out.',
      },
    ], //END
  },
  {
    id: 19,
    path: 'maze/home/hall/fork/right/left/lobby/junction/lib/reception/archives/next/next/storage/',
    type: 'chamber',
    posName: 'storage',
    next: null,
    prev: 'maze/home/hall/fork/right/left/lobby/junction/lib/reception/archives/next/next/',
    items: [
      {
        id: nanoid(),
        css: wizardXyzzyPosition,
        name: 'xyzzy.itm',
        image: wizardXyzzy,
        altText: 'this is your fellow student xyzzy',
        info: 'Oh, hi foobar. how are you doing buddy? I was told there is a secret treasure hidden in an empty room around, but this was the only one i found and when i use "ls" on it nothing happens... weird, dont ya think? -y.t. xyzzy',
      },
    ], //END
  },
  //PRIVACY//
  {
    id: 20,
    path: 'maze/home/hall/fork/right/left/lobby/junction/privacy/',
    type: 'privacy',
    posName: 'privacy',
    next: ['restrooms', 'questionmark'],
    prev: 'maze/home/hall/fork/right/left/lobby/junction/',
    items: [],
  },
  //toilets
  {
    id: 21,
    path: 'maze/home/hall/fork/right/left/lobby/junction/privacy/restrooms/',
    type: 'restrooms',
    posName: 'restrooms',
    next: ['pink', 'blue'],
    prev: 'maze/home/hall/fork/right/left/lobby/junction/privacy/',
    items: [],
  },
  {
    id: 22,
    path: 'maze/home/hall/fork/right/left/lobby/junction/privacy/restrooms/pink/',
    type: 'pink',
    posName: 'pink',
    next: null,
    prev: 'maze/home/hall/fork/right/left/lobby/junction/privacy/restrooms/',
    items: [
      {
        id: nanoid(),
        css: urinalsPosition,
        name: 'urinals.itm',
        image: urinals,
        altText: 'this are some urinals',
        info: 'This are some urinals. Nothing to inspect, lets say... too deep',
      },
    ], //END
  },
  {
    id: 23,
    path: 'maze/home/hall/fork/right/left/lobby/junction/privacy/restrooms/blue/',
    type: 'blue',
    posName: 'blue',
    next: null,
    prev: 'maze/home/hall/fork/right/left/lobby/junction/privacy/restrooms/',
    items: [
      {
        id: nanoid(),
        css: toiletPosition,
        name: 'toilet.itm',
        image: toilet,
        altText: 'this is a toilet',
        info: 'This is a toilet cubicle. Dont mind it too much and search for clues.',
      },
    ], //END
  },
  //questionmark door
  {
    id: 24,
    path: 'maze/home/hall/fork/right/left/lobby/junction/privacy/questionmark/',
    type: 'chamber',
    posName: 'questionmark',
    next: null,
    prev: 'maze/home/hall/fork/right/left/lobby/junction/privacy/',
    items: [], //END
  },
];
