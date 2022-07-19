import chamber from '../../images/mazeRooms/chamber.png';
import chamberBlue from '../../images/mazeRooms/chamberBlue.png';
import chamberPink from '../../images/mazeRooms/chamberPink.png';
import fork from '../../images/mazeRooms/fork.png';
import fork2 from '../../images/mazeRooms/fork2.png';
import hall from '../../images/mazeRooms/hall.png';
import junction from '../../images/mazeRooms/junction.png';
import library from '../../images/mazeRooms/library.png';
import lobby from '../../images/mazeRooms/lobby.png';
import privacy from '../../images/mazeRooms/privacy.png';
import reception from '../../images/mazeRooms/reception.png';
import restrooms from '../../images/mazeRooms/restrooms.png';

export default function findImage(currentPosition) {
  if (currentPosition.type === 'chamber') {
    return {image: chamber, altText: 'the end of the way'};
  } else if (currentPosition.type === 'hall') {
    return {image: hall, altText: 'a lonely and spooky hall'};
  } else if (currentPosition.type === 'fork') {
    return {image: fork, altText: 'a forked road, you have to choose'};
  } else if (currentPosition.type === 'fork2') {
    return {image: fork2, altText: 'an other forked road, you have to choose again'};
  } else if (currentPosition.type === 'lobby') {
    return {image: lobby, altText: 'a big vault with a door and office plants'};
  } else if (currentPosition.type === 'junction') {
    return {image: junction, altText: 'a crossing of different paths'};
  } else if (currentPosition.type === 'lib') {
    return {image: library, altText: 'the entryhall of a library'};
  } else if (currentPosition.type === 'reception') {
    return {image: reception, altText: 'Choose between two doors'};
  } else if (currentPosition.type === 'privacy') {
    return {image: privacy, altText: 'a big vault with different doors'};
  } else if (currentPosition.type === 'restrooms') {
    return {image: restrooms, altText: 'go through the blue or the pink door'};
  } else if (currentPosition.type === 'blue') {
    return {image: chamberBlue, altText: 'this is a room painted blue'};
  } else if (currentPosition.type === 'pink') {
    return {image: chamberPink, altText: 'this is a room painted pink'};
  }
}
