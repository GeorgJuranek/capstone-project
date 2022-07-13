import {mazeArray} from '../arrays/mazeArray.js';

export default function findPosition(search) {
  const foundPosition = mazeArray.find(mazeRoom => mazeRoom.path === search);

  if (foundPosition) {
    return foundPosition;
  }
}
