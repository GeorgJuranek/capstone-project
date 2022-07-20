export default function catSpell(preparedInstruction, currentPosition) {
  const roomItemNames = currentPosition.items.map(item => ({name: item.name, info: item.info}));

  if (roomItemNames.length > 0) {
    const foundItem = roomItemNames.find(item => item.name === preparedInstruction[1]);

    if (foundItem) {
      return {
        spellEffectMessage: 'a magic voice that whispers: ',
        spellEffectOutput: [foundItem.name, foundItem.info],
        spellEffectHasError: false,
      };
    } else {
      return {
        spellEffectMessage: 'a magic voice that whispers: ',
        spellEffectOutput: `cat: ${preparedInstruction[1]}: No such file or directory`,
        spellEffectHasError: true,
      };
    }
  } else {
    return {
      spellEffectMessage: 'a magic voice that whispers: ',
      spellEffectOutput: 'here is nothing to inspect',
      spellEffectHasError: true,
    };
  }
}
