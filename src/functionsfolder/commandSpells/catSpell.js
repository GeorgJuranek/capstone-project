export default function catSpell(currentPosition) {
  console.log('currentpositionitems: ', currentPosition.items);
  console.log(typeof currentPosition.items);
  console.log('name: ', currentPosition.items[0].name);
  //
  const roomItemName = currentPosition.items[0].name;
  const roomItemInfo = currentPosition.items[0].info;

  if (currentPosition.items.length > 0) {
    return {
      spellEffectMessage: 'a magic voice that whispers: ',
      spellEffectOutput: [`${roomItemName} :`, `"${roomItemInfo}"`],
      spellEffectHasError: false,
    };
  } else {
    return {
      spellEffectMessage: 'a magic voice that whispers: ',
      spellEffectOutput: `here is nothing to inspect"`,
      spellEffectHasError: true,
    };
  }
}
