import {nanoid} from 'nanoid';

import wizardXyzzy from '../images/charSprites/wizardXyzzy.png';
import archive0Item from '../images/itemSprites/archive0Item.png';
import archive1Item from '../images/itemSprites/archive1Item.png';
import archive2Item from '../images/itemSprites/archive2Item.png';
import binItem from '../images/itemSprites/binItem.png';
import coffeeItem from '../images/itemSprites/coffeeItem.png';
import flowerItem from '../images/itemSprites/flowerItem.png';
import officeItem from '../images/itemSprites/officeItem.png';
import toiletItem from '../images/itemSprites/toiletItem.png';
import urinalsItem from '../images/itemSprites/urinalsItem.png';
import windowItem from '../images/itemSprites/windowItem.png';
import xyzzydesktopItem from '../images/itemSprites/xyzzydesktopItem.png';
import {archivePositionCss} from '../stylesheet/StyledImages.js';
import {officePositionCss} from '../stylesheet/StyledImages.js';
import {binPositionCss} from '../stylesheet/StyledImages.js';
import {coffeePositionCss} from '../stylesheet/StyledImages.js';
import {flowerPositionCss} from '../stylesheet/StyledImages.js';
import {urinalsPositionCss} from '../stylesheet/StyledImages.js';
import {friendlyWizardPositionCss} from '../stylesheet/StyledImages.js';
import {toiletPositionCss} from '../stylesheet/StyledImages.js';
import {windowPositionCss} from '../stylesheet/StyledImages.js';

export const mazeArray = [
  {
    id: 0,
    path: 'maze/start/',
    type: 'end',
    posName: 'start',
    next: ['passage'],
    prev: null,
    items: [
      {
        id: nanoid(),
        css: officePositionCss,
        name: 'desk.itm',
        image: officeItem,
        altText: 'this is your office',
        info: 'This is your office. The screen shows some notes you did earlier: "Always remember: 1.) ask for room you are IN with pwd and confirm with enter, then 2.) ask for places to go FROM HERE ls and enter, then 3.) go somewhere typing cd AND what you got from ls. I hope this will work out fine..." ',
      },
      {
        id: nanoid(),
        css: flowerPositionCss,
        name: 'flower.itm',
        image: flowerItem,
        altText: 'this is a beautiful flower on your desk',
        info: "to look at the flower on your desk fulfilles you with calmness and confidence, eventhough you are a little big allergic to it, but its not that bad so you don't care that much",
      },
    ],
  },
  {
    id: 1,
    path: 'maze/start/passage/',
    type: 'passage',
    posName: 'passage',
    next: ['splitways'],
    prev: 'maze/start/',
    items: [],
  },
  // I. L/R CHOICE
  {
    id: 2,
    path: 'maze/start/passage/splitways/',
    type: 'splitways',
    posName: 'splitways',
    next: ['left', 'right'],
    prev: 'maze/start/passage/',
    items: [],
  },
  //LEFT PATH
  {
    id: 4,
    path: 'maze/start/passage/splitways/left/',
    type: 'passage',
    posName: 'left',
    next: ['end'],
    prev: 'maze/start/passage/splitways/',
    items: [],
  },
  {
    id: 5,
    path: 'maze/start/passage/splitways/left/end/',
    type: 'end',
    posName: 'end',
    next: null,
    prev: 'maze/start/passage/splitways/left/',
    items: [
      {
        id: nanoid(),
        css: binPositionCss,
        name: 'bin.itm',
        image: binItem,
        altText: 'this is your office',
        info: 'You find a note in the bin that says: "IMPORTANT NOTE: I can teleport back by typing "cd .." IMPORTANT NOTE FOR IMPORTANT NOTE: I should keep this cheatsheet always with me so i dont forget this important spell -signed: foobar"',
      },
    ], //END
  },
  // RIGHT PATH // II. L/R CHOICE
  {
    id: 6,
    path: 'maze/start/passage/splitways/right/',
    type: 'splitways2',
    posName: 'right',
    next: ['left', 'right'],
    prev: 'maze/start/passage/splitways/',
    items: [],
  },
  //RIGHT RIGHT
  {
    id: 7,
    path: 'maze/start/passage/splitways/right/right/',
    type: 'end',
    posName: 'right',
    next: null,
    prev: 'maze/start/passage/splitways/right/',
    items: [
      {
        id: nanoid(),
        css: coffeePositionCss,
        name: 'coffee.itm',
        image: coffeeItem,
        altText: 'this is a table with a can of coffee and a mug, a straw is put into',
        info: 'You find coffee! finally! yay! but when you check it, you recognize that its freezing cold. No milk or sugar. Oh wait! Under the mug is a little note written on the corner of a halved napkin: "- ...p..lease dont screw it up this time, just remember: by typing "cd .." you can always go back !"',
      },
    ], //END
  },
  //RIGHT LEFT
  {
    id: 8,
    path: 'maze/start/passage/splitways/right/left/',
    type: 'passage',
    posName: 'left',
    next: ['lobby'],
    prev: 'maze/start/passage/splitways/right/',
    items: [],
  },
  //LOBBY//
  {
    id: 9,
    path: 'maze/start/passage/splitways/right/left/lobby/',
    type: 'lobby',
    posName: 'lobby',
    next: ['crossing'],
    prev: 'maze/start/passage/splitways/right/left/',
    items: [],
  },
  //CROSSING
  {
    id: 10,
    path: 'maze/start/passage/splitways/right/left/lobby/crossing/',
    type: 'crossing',
    posName: 'crossing',
    next: ['lib', 'user'],
    prev: 'maze/start/passage/splitways/right/left/lobby/',
    items: [],
  },
  //LIBRARY//
  {
    id: 11,
    path: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/',
    type: 'lib',
    posName: 'lib',
    next: ['reception'],
    prev: 'maze/start/passage/splitways/right/left/lobby/crossing/',
    items: [],
  },
  // CHOICE at Library reception
  {
    id: 12,
    path: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/reception/',
    type: 'reception',
    posName: 'reception',
    next: ['office', 'archives'],
    prev: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/',
    items: [],
  },
  // office of xyzzy
  {
    id: 13,
    path: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/reception/office/',
    type: 'end',
    posName: 'office',
    next: null,
    prev: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/reception/',
    items: [
      {
        id: nanoid(),
        css: officePositionCss,
        name: 'desktop.itm',
        image: xyzzydesktopItem,
        altText: 'this is another desktop',
        info: 'this is the desktop of your fellow student xyzzy. seems like he is is really up to something.',
      },
      {
        id: nanoid(),
        css: windowPositionCss,
        name: 'window.itm',
        image: windowItem,
        altText: 'this is a window with a blue and purple sunset, but behind bars',
        info: 'looking out of the window you see a beautiful sunset. the view on the horizon makes you feel yearning and adventurous.',
      },
    ],
  }, //END
  // archives
  {
    id: 14,
    path: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/reception/archives/',
    type: 'splitways',
    posName: 'archives',
    next: ['archive0', 'next'],
    prev: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/reception/',
    items: [],
  },
  {
    id: 15,
    path: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/reception/archives/archive0/',
    type: 'end',
    posName: 'archive0',
    next: null,
    prev: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/reception/archives/',
    items: [
      {
        id: nanoid(),
        css: archivePositionCss,
        name: 'archive.itm',
        image: archive0Item,
        altText: 'this is a cluttering file cabinet',
        info: 'this is a cluttering, old and dusty file cabinet. Looking at it stresses you out.',
      },
    ], //END
  },
  {
    id: 16,
    path: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/reception/archives/next/',
    type: 'splitways2',
    posName: 'next',
    next: ['archive1', 'next'],
    prev: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/reception/archives/',
    items: [],
  },
  {
    id: 17,
    path: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/reception/archives/next/archive1/',
    type: 'end',
    posName: 'archive1',
    next: null,
    prev: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/reception/archives/next/',
    items: [
      {
        id: nanoid(),
        css: archivePositionCss,
        name: 'archive.itm',
        image: archive1Item,
        altText: 'this is a cluttering file cabinet',
        info: 'this is a cluttering, old and dusty file cabinet. Looking at it stresses you out.',
      },
    ], //END
  },
  {
    id: 17,
    path: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/reception/archives/next/next/',
    type: 'splitways',
    posName: 'next',
    next: ['archive2', 'storage'],
    prev: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/reception/archives/next/',
    items: [],
  },
  {
    id: 18,
    path: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/reception/archives/next/next/archive2/',
    type: 'end',
    posName: 'archive2',
    next: null,
    prev: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/reception/archives/next/',
    items: [
      {
        id: nanoid(),
        css: archivePositionCss,
        name: 'archive.itm',
        image: archive2Item,
        altText: 'this is a cluttering file cabinet',
        info: 'this is a cluttering, old and dusty file cabinet. Looking at it stresses you out.',
      },
    ], //END
  },
  {
    id: 19,
    path: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/reception/archives/next/next/storage/',
    type: 'end',
    posName: 'storage',
    next: null,
    prev: 'maze/start/passage/splitways/right/left/lobby/crossing/lib/reception/archives/next/next/',
    items: [
      {
        id: nanoid(),
        css: friendlyWizardPositionCss,
        name: 'xyzzy.itm',
        image: wizardXyzzy,
        altText: 'this is your fellow student xyzzy',
        info: 'Oh, hi foobar. how are you doing buddy? I was told there is a secret treasure hidden in an empty room around, but this was the only one i found and when i use "ls" on it nothing happens... weird, dont ya think? -y.t. xyzzy',
      },
    ], //END
  },
  //USER//
  {
    id: 20,
    path: 'maze/start/passage/splitways/right/left/lobby/crossing/user/',
    type: 'user',
    posName: 'user',
    next: ['restrooms', 'questionmark'],
    prev: 'maze/start/passage/splitways/right/left/lobby/crossing/',
    items: [],
  },
  //toilets
  {
    id: 21,
    path: 'maze/start/passage/splitways/right/left/lobby/crossing/user/restrooms/',
    type: 'restrooms',
    posName: 'restrooms',
    next: ['pink', 'blue'],
    prev: 'maze/start/passage/splitways/right/left/lobby/crossing/user/',
    items: [],
  },
  {
    id: 22,
    path: 'maze/start/passage/splitways/right/left/lobby/crossing/user/restrooms/pink/',
    type: 'end',
    posName: 'pink',
    next: null,
    prev: 'maze/start/passage/splitways/right/left/lobby/crossing/user/restrooms/',
    items: [
      {
        id: nanoid(),
        css: urinalsPositionCss,
        name: 'urinals.itm',
        image: urinalsItem,
        altText: 'this are some urinals',
        info: 'This are some urinals. Nothing to inspect, lets say... too deep',
      },
    ], //END
  },
  {
    id: 23,
    path: 'maze/start/passage/splitways/right/left/lobby/crossing/user/restrooms/blue/',
    type: 'end',
    posName: 'blue',
    next: null,
    prev: 'maze/start/passage/splitways/right/left/lobby/crossing/user/restrooms/',
    items: [
      {
        id: nanoid(),
        css: toiletPositionCss,
        name: 'toilet.itm',
        image: toiletItem,
        altText: 'this is a toilet',
        info: 'This is a toilet cubicle. Dont mind it too much and search for clues.',
      },
    ], //END
  },
  //questionmark door
  {
    id: 24,
    path: 'maze/start/passage/splitways/right/left/lobby/crossing/user/questionmark/',
    type: 'end',
    posName: 'questionmark',
    next: null,
    prev: 'maze/start/passage/splitways/right/left/lobby/crossing/user/',
    items: [], //END
  },
];
