export default function pwdSpell(preparedInputAsArray, currentArrayPosition) {
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
