import {mazeArray} from '../data/mazeArray.js';

export default function findPosition(search) {
  const foundPosition = mazeArray.find(mazeRoom => mazeRoom.path === search);
  if (foundPosition) {
    return foundPosition;
  } else {
    return false;
  }
}
