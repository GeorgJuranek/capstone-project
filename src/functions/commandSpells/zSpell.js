import findPosition from '../finder/findPosition';

export default function zSpell(preparedInstruction, onChangePosition) {
  const foundGlobalPosition = findPosition(preparedInstruction[1]);

  if (preparedInstruction.length === 2) {
    if (foundGlobalPosition) {
      onChangePosition(preparedInstruction[1]);

      return {
        spellEffectMessage: 'a magic voice that whispers: ',
        spellEffectOutput:
          "You are obviously a cheater, this spell is for admin-wizards only and shouldn't be used while exam.",
        spellEffectHasError: false,
      };
    } else {
      return {
        spellEffectMessage: 'a magic voice that whispers: ',
        spellEffectOutput:
          'You are obviously trying to use a cheat thats forbidden while doing this task, please use cd and second argument to move.',
        spellEffectHasError: true,
      };
    }
  } else {
    return {
      spellEffectMessage: 'a magic voice that whispers: ',
      spellEffectOutput:
        'hmmm. What are you trying to do here? Please check your command again if it fits the list of valid commands.',
      spellEffectHasError: true,
    };
  }
}
