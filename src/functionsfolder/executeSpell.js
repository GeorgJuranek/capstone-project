import {mazeArray} from '../arrays/mazeArray.js';

export default function executeSpell(preparedInputAsArray, currentArrayPosition, changePosition) {
  // PWD //
  if (preparedInputAsArray[0] === 'pwd') {
    if (preparedInputAsArray.length === 1) {
      return {
        spellEffectMessage: 'a magic voice that whispers, you are here: ',
        spellEffectOutput: currentArrayPosition.path,
        spellEffectHasError: false,
      };
    } else {
      return {
        spellEffectMessage: 'a magic voice that whispers: ',
        spellEffectOutput: 'pwd: too many arguments',
        spellEffectHasError: true,
      };
    }
  }
  // LS //
  else if (preparedInputAsArray[0] === 'ls') {
    //only ls
    if (preparedInputAsArray.length === 1) {
      // if no dead-end
      if (currentArrayPosition.next !== null) {
        return {
          spellEffectMessage: 'a magic voice that whispers, you can go to: ',
          spellEffectOutput: currentArrayPosition.next,
          spellEffectHasError: false,
        };
      }
      // if dead-end
      else {
        return {
          spellEffectMessage: 'a magic voice that whispers: ',
          spellEffectOutput: 'dead end, you can only go back... type in " cd .. "',
          spellEffectHasError: true,
        };
      }
    }
    // ls + path
    else if (preparedInputAsArray.length === 2) {
      // check if second Argument is a valid roomObject from MazeArray
      const searchRoomFitsPath = mazeArray.find(mazeRoom => mazeRoom.path === preparedInputAsArray[1]);
      // valid path was given
      if (searchRoomFitsPath !== undefined) {
        //is not dead end room
        if (searchRoomFitsPath.next !== null) {
          return {
            spellEffectMessage: 'a magic voice that whispers: ',
            spellEffectOutput: `The Room ${searchRoomFitsPath.path} contains the door to ${searchRoomFitsPath.next}`,
            spellEffectHasError: false,
          };
        } else {
          return {
            spellEffectMessage: 'a magic voice that whispers: ',
            spellEffectOutput: `The Room ${searchRoomFitsPath.path} contains no more doors.`,
            spellEffectHasError: true,
          };
        }
      }
      // invalid path was given
      else {
        return {
          spellEffectMessage: 'a magic voice that whispers: ',
          spellEffectOutput: `"${preparedInputAsArray[1]}": No such file or directory`,
          spellEffectHasError: true,
        };
      }
    }
  }

  // CD //
  else if (preparedInputAsArray[0] === 'cd') {
    // given 2.argument fits to next-property of current Position
    if (preparedInputAsArray[1] === currentArrayPosition.next) {
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
    }
    // CD 2.ARGUMENT IS ".." TO GO BACK
    else if (preparedInputAsArray[1] === '..') {
      if (currentArrayPosition.prev !== null) {
        const goPreviousPath = currentArrayPosition.prev;
        changePosition(goPreviousPath);
        //
        return {
          spellEffectMessage: 'you moved back to: ',
          spellEffectOutput: goPreviousPath,
          spellEffectHasError: false,
        };
      } else {
        //
        return {
          spellEffectMessage: 'a magic voice that whispers: ',
          spellEffectOutput: "Can't go back any further",
          spellEffectHasError: true,
        };
      }
    }

    // CD ARGUMENT IS EMPTY OR INVALID
    else {
      return {
        spellEffectMessage: 'a magic voice that whispers: ',
        spellEffectOutput: `cd: no such file or directory: ${preparedInputAsArray[1]}`,
        spellEffectHasError: true,
      };
    }
  }
  // NO MATCH WITH SPELL //
  else {
    return {
      spellEffectMessage: 'a magic voice that whispers: ',
      spellEffectOutput: `zsh: command not found: ${preparedInputAsArray[0]}`,
      spellEffectHasError: true,
    };
  }
}
