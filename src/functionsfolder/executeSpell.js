import {mazeArray} from '../arrays/mazeArray.js';

export default function executeSpell(checkedInputAsArray, currentArrayPosition, changePosition) {
  //NOW SEARCH FOR THE SPELL//
  // PWD //
  if (checkedInputAsArray[0] === 'pwd') {
    if (checkedInputAsArray.length === 1) {
      return {
        spellEffectMessage: 'a magic voice that whispers: you are here ',
        spellEffectOutput: currentArrayPosition.path,
        spellEffectHasError: false,
      };
    } else {
      return {
        spellEffectMessage: 'a magic voice that whispers: ',
        spellEffectOutput: 'pwd: too many arguments...',
        spellEffectHasError: true,
      };
    }
  }
  // LS //
  else if (checkedInputAsArray[0] === 'ls') {
    //only ls
    if (checkedInputAsArray.length === 1) {
      // if no dead-end
      if (currentArrayPosition.next !== null) {
        return {
          spellEffectMessage: 'a magic voice that whispers: you can go to ',
          spellEffectOutput: currentArrayPosition.next,
          spellEffectHasError: false,
        };
      }
      // if dead-end
      else {
        return {
          spellEffectMessage: 'a magic voice that whispers: ',
          spellEffectOutput: 'dead end, you can only go back...',
          spellEffectHasError: true,
        };
      }
    }
    // ls + path
    else if (checkedInputAsArray.length === 2) {
      // check if second Argument is a valid roomObject from MazeArray
      const searchRoomFitsPath = mazeArray.find(mazeRoom => mazeRoom.path === checkedInputAsArray[1]);
      // valid path was given
      if (searchRoomFitsPath !== undefined) {
        return {
          spellEffectMessage: 'a magic voice that whispers: ',
          spellEffectOutput: `The Room ${searchRoomFitsPath.path} contains the door to ${searchRoomFitsPath.next} `,
          spellEffectHasError: false,
        };
      }
      // invalid path was given
      else {
        return {
          spellEffectMessage: 'a magic voice that whispers: ',
          spellEffectOutput: 'you are searching for an incorrect path. Have you tried the full-path yet?...',
          spellEffectHasError: true,
        };
      }
    }
  }
  // CD //
  else if (checkedInputAsArray[0] === 'cd' && checkedInputAsArray.length === 2) {
    // given 2.argument fits to next-property of current Position
    if (checkedInputAsArray[1] === currentArrayPosition.next) {
      //checks if a next-room exists
      if (currentArrayPosition.next !== null) {
        const addNewPath = currentArrayPosition.path + currentArrayPosition.next + '/';
        // ??SIDE EFFECT BETTER POSITION?? WHERE HOW??
        changePosition(addNewPath);
        //
        return {
          spellEffectMessage: 'you moved to position: ',
          spellEffectOutput: addNewPath,
          spellEffectHasError: false,
        };
      }
      // if there is no next-room
      else {
        return {
          spellEffectMessage: 'a magic voice that whispers: ',
          spellEffectOutput: 'Maybe you should go back...',
          spellEffectHasError: true,
        };
      }
    }
    // CD 2.ARGUMENT IS ".. TO GO BACK
    else if (checkedInputAsArray[1] === '..') {
      if (currentArrayPosition.prev !== null) {
        const goPreviousPath = currentArrayPosition.prev;
        changePosition(goPreviousPath);
        //
        return {
          spellEffectMessage: 'you moved to position: ',
          spellEffectOutput: goPreviousPath,
          spellEffectHasError: false,
        };
      } else {
        //
        return {
          spellEffectMessage: "you can't go back any further",
          spellEffectOutput: 'you are standing with your back to the wall',
          spellEffectHasError: true,
        };
      }
    }
    // CD ARGUMENT IS INVALID
    else {
      return {
        spellEffectMessage: "you can't move to this room from here",
        spellEffectOutput: 'the way does not exist',
        spellEffectHasError: true,
      };
    }
  }
  // NO MATCH WITH SPELL //
  else {
    return {
      spellEffectMessage: 'Something went wrong...',
      spellEffectOutput: 'No Magic was executed!',
      spellEffectHasError: true,
    };
  }
}
