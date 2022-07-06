import {mazeArray} from '../../arrays/mazeArray';

export default function lSpell(preparedInputAsArray, currentArrayPosition) {
  if (preparedInputAsArray.length === 1) {
    if (currentArrayPosition.next !== null) {
      return {
        spellEffectMessage: 'a magic voice that whispers, you can go to: ',
        spellEffectOutput: currentArrayPosition.next,
        spellEffectHasError: false,
      };
    } else {
      return {
        spellEffectMessage: 'a magic voice that whispers: ',
        spellEffectOutput: 'dead end, you can only go back... type in " cd .. "',
        spellEffectHasError: true,
      };
    }
  } else if (preparedInputAsArray.length === 2) {
    const searchRoomFitsPath = mazeArray.find(mazeRoom => mazeRoom.path === preparedInputAsArray[1]);
    if (searchRoomFitsPath !== undefined) {
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
    } else {
      return {
        spellEffectMessage: 'a magic voice that whispers: ',
        spellEffectOutput: `"${preparedInputAsArray[1]}": No such file or directory`,
        spellEffectHasError: true,
      };
    }
  }
}
