export default function pwdSpell(preparedInput, currentPosition) {
  if (preparedInput.length === 1) {
    return {
      spellEffectMessage: 'a magic voice that whispers, you are here: ',
      spellEffectOutput: currentPosition.path,
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
