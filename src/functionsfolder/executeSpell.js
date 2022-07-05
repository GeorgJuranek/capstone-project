import {mazeArray} from '../arrays/mazeArray.js';

export default function executeSpell(checkedSpellword, currentArrayPosition, currentArrayRoomObject, changePosition) {
  const currentSpellwordAsArray = checkedSpellword.split(' ');
  //NOW SEARCH FOR THE SPELL//
  // PWD //
  if (currentSpellwordAsArray[0] === 'pwd') {
    if (currentSpellwordAsArray.length === 1) {
      return {
        spellEffectMessage: 'a magic voice that whispers: you are here ',
        spellEffectOutput: currentArrayPosition,
      };
    } else {
      return {
        spellEffectMessage: 'a magic voice that whispers: ',
        spellEffectOutput: 'pwd: too many arguments...',
      };
    }
  }
  // LS //
  else if (currentSpellwordAsArray[0] === 'ls') {
    //only ls
    if (currentSpellwordAsArray.length === 1) {
      // if no dead-end
      if (currentArrayRoomObject.next !== null) {
        return {
          spellEffectMessage: 'a magic voice that whispers: you can go to ',
          spellEffectOutput: currentArrayRoomObject.next,
        };
      }
      // if dead-end
      else {
        return {
          spellEffectMessage: 'a magic voice that whispers: ',
          spellEffectOutput: 'dead end, you can only go back...',
        };
      }
    }
    // ls + path
    else if (currentSpellwordAsArray.length === 2) {
      // check if second Argument is a valid roomObject from MazeArray
      const searchRoomFitsPath = mazeArray.find(mazeRoom => mazeRoom.path === currentSpellwordAsArray[1]);
      // valid path was given
      if (searchRoomFitsPath !== undefined) {
        return {
          spellEffectMessage: 'a magic voice that whispers: ',
          spellEffectOutput: `The Room ${searchRoomFitsPath.path} contains the door to ${searchRoomFitsPath.next} `,
        };
      }
      // invalid path was given
      else {
        return {
          spellEffectMessage: 'a magic voice that whispers: ',
          spellEffectOutput: 'you are searching for an incorrect path. Have you tried the full-path yet?...',
        };
      }
    }
  }
  // CD //
  else if (currentSpellwordAsArray[0] === 'cd' && currentSpellwordAsArray.length === 2) {
    // given argument fits to next-property of current Position
    if (currentSpellwordAsArray[1] === currentArrayRoomObject.next) {
      //checks if a next-room exists
      if (currentArrayRoomObject.next !== null) {
        const addNewPath = currentArrayRoomObject.path + currentArrayRoomObject.next + '/';
        // SIDE EFFECT BETTER POSITION?? HOW??
        changePosition(addNewPath);
        //
        return {
          spellEffectMessage: 'you moved to position: ',
          spellEffectOutput: addNewPath,
        };
      }
      // if there is no next-room
      else {
        return {
          spellEffectMessage: 'a magic voice that whispers: ',
          spellEffectOutput: "You are facing a dead end. You can't go any further...",
        };
      }
    }
    // CD ARGUMENT IS .. TO GO BACK
    else if (currentSpellwordAsArray[1] === '..') {
      if (currentArrayRoomObject.prev !== null) {
        const goPreviousPath = currentArrayRoomObject.prev;
        console.log('Go back to ArrayPosition: ', goPreviousPath);
        changePosition(goPreviousPath);
      } else {
        console.log("Dead end. You can't go any further");
      }
    }
    // CD ARGUMENT IS INVALID
    else {
      console.warn('This room does not exist, try something else!');
    }
  }
  // NO MATCH WITH SPELL //
  else {
    return {
      spellEffectMessage: 'Something went wrong here...',
      spellEffectOutput: 'No Magic was executed!',
    };
  }
}
