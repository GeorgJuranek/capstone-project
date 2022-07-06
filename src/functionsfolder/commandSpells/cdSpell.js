export default function cdSpell(preparedInputAsArray, currentArrayPosition, changePosition) {
  if (preparedInputAsArray[1] === currentArrayPosition.next) {
    const addNewPath = currentArrayPosition.path + currentArrayPosition.next + '/';
    changePosition(addNewPath);
    return {
      spellEffectMessage: 'you moved to position: ',
      spellEffectOutput: addNewPath,
      spellEffectHasError: false,
    };
  } else if (preparedInputAsArray[1] === '..') {
    if (currentArrayPosition.prev !== null) {
      const goPreviousPath = currentArrayPosition.prev;
      changePosition(goPreviousPath);
      return {
        spellEffectMessage: 'you moved back to: ',
        spellEffectOutput: goPreviousPath,
        spellEffectHasError: false,
      };
    } else {
      return {
        spellEffectMessage: 'a magic voice that whispers: ',
        spellEffectOutput: "Can't go back any further",
        spellEffectHasError: true,
      };
    }
  } else {
    return {
      spellEffectMessage: 'a magic voice that whispers: ',
      spellEffectOutput: `cd: no such file or directory: ${preparedInputAsArray[1]}`,
      spellEffectHasError: true,
    };
  }
}
