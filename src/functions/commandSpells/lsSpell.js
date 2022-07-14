import {mazeArray} from '../../data/mazeArray';

export default function lsSpell(preparedInput, currentPosition, onChangeEnlighten) {
  //
  function searchingForItemNames() {
    if (currentPosition.items.length > 0) {
      const itemEntries = currentPosition.items.map(item => item.name);
      return itemEntries;
    } else {
      const itemEntries = [];
      return itemEntries;
    }
  }
  //
  const itemChoices = searchingForItemNames();
  //
  if (preparedInput.length === 1) {
    onChangeEnlighten(true);

    //
    if (currentPosition.next !== null) {
      const allChoices = [...currentPosition.next, ...itemChoices];
      return {
        spellEffectMessage: 'a magic voice that whispers, you can go to: ',
        spellEffectOutput: allChoices, //currentPosition.next + itemEntries,
        spellEffectHasError: false,
      };
    } else if (currentPosition.next === null && itemChoices.length > 0) {
      return {
        spellEffectMessage: 'a magic voice that whispers: dead end, but you can inspect ',
        spellEffectOutput: [...itemChoices],
        spellEffectHasError: false,
      };
    } else {
      return {
        spellEffectMessage: 'a magic voice that whispers: ',
        spellEffectOutput: 'dead end, you can only go back... type in " cd .. "',
        spellEffectHasError: true,
      };
    }
  }
  //////////////////////////////////////////////
  else if (preparedInput.length === 2) {
    const searchRoomFitsPath = mazeArray.find(mazeRoom => mazeRoom.path === preparedInput[1]);
    if (searchRoomFitsPath !== undefined) {
      if (searchRoomFitsPath.next !== null) {
        return {
          spellEffectMessage: 'a magic voice that whispers: ',
          spellEffectOutput: `The Room ${searchRoomFitsPath.path} contains ${searchRoomFitsPath.next} ${itemChoices}`,
          spellEffectHasError: false,
        };
      } else {
        return {
          spellEffectMessage: 'a magic voice that whispers: ',
          spellEffectOutput: `The Room ${searchRoomFitsPath.path} contains nothing.`,
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
