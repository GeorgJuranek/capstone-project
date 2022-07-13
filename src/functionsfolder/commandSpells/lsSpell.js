import {mazeArray} from '../../arrays/mazeArray';

export default function lsSpell(preparedInput, currentPosition, onChangeEnlighten) {
  if (preparedInput.length === 1) {
    onChangeEnlighten(true);
    if (currentPosition.next !== null) {
      return {
        spellEffectMessage: 'a magic voice that whispers, you can go to: ',
        spellEffectOutput: currentPosition.next,
        spellEffectHasError: false,
      };
    } else {
      return {
        spellEffectMessage: 'a magic voice that whispers: ',
        spellEffectOutput: 'dead end, you can only go back... type in " cd .. "',
        spellEffectHasError: true,
      };
    }
  } else if (preparedInput.length === 2) {
    const searchRoomFitsPath = mazeArray.find(mazeRoom => mazeRoom.path === preparedInput[1]);
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
        spellEffectOutput: `"${preparedInput[1]}": No such file or directory`,
        spellEffectHasError: true,
      };
    }
  }
}
