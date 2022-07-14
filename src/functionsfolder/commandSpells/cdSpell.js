import findPosition from '../findPosition.js';

export default function cdSpell(preparedInput, currentPosition, onChangePosition) {
  function checkForNext() {
    if (currentPosition.next !== null) {
      return currentPosition.next.some(nextPositionPath => nextPositionPath === preparedInput[1]);
    } else {
      return false; //this solves missing array for next Position in last Rooms "null"
    }
  }

  const isNextPathFound = checkForNext();

  if (isNextPathFound) {
    const goNewPath = currentPosition.path + preparedInput[1] + '/';
    const nextPositionEntry = findPosition(goNewPath).type;
    onChangePosition(goNewPath);
    return {
      spellEffectMessage: 'you moved to position: ',
      spellEffectOutput: nextPositionEntry,
      spellEffectHasError: false,
    };
  } else if (preparedInput[1] === '..') {
    if (currentPosition.prev !== null) {
      const goPreviousPath = currentPosition.prev;
      const prevPositionEntry = findPosition(goPreviousPath).type;
      onChangePosition(goPreviousPath);
      return {
        spellEffectMessage: 'you moved back to: ',
        spellEffectOutput: prevPositionEntry,
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
      spellEffectOutput: `cd: no such file or directory: ${preparedInput[1]}`,
      spellEffectHasError: true,
    };
  }
}
