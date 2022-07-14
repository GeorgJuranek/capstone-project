import catSpell from './commandSpells/catSpell';
import cdSpell from './commandSpells/cdSpell';
import lsSpell from './commandSpells/lsSpell';
import pwdSpell from './commandSpells/pwdSpell';

export default function executeSpell(preparedInput, currentPosition, onChangePosition, onChangeEnlighten) {
  if (preparedInput[0] === 'pwd') {
    return pwdSpell(preparedInput, currentPosition);
  } else if (preparedInput[0] === 'ls') {
    return lsSpell(preparedInput, currentPosition, onChangeEnlighten);
  } else if (preparedInput[0] === 'cd') {
    return cdSpell(preparedInput, currentPosition, onChangePosition);
  } else if (preparedInput[0] === 'cat') {
    return catSpell(currentPosition);
  } else {
    return {
      spellEffectMessage: 'a magic voice that whispers: ',
      spellEffectOutput: `zsh: command not found: ${preparedInput[0]}`,
      spellEffectHasError: true,
    };
  }
}
