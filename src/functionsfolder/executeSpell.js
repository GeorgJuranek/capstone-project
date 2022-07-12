import cdSpell from './commandSpells/cdSpell';
import lsSpell from './commandSpells/lsSpell';
import pwdSpell from './commandSpells/pwdSpell';

export default function executeSpell(preparedInputAsArray, currentArrayPosition, onChangePosition, onChangeEnlighten) {
  if (preparedInputAsArray[0] === 'pwd') {
    return pwdSpell(preparedInputAsArray, currentArrayPosition);
  } else if (preparedInputAsArray[0] === 'ls') {
    return lsSpell(preparedInputAsArray, currentArrayPosition, onChangeEnlighten);
  } else if (preparedInputAsArray[0] === 'cd') {
    return cdSpell(preparedInputAsArray, currentArrayPosition, onChangePosition);
  } else {
    return {
      spellEffectMessage: 'a magic voice that whispers: ',
      spellEffectOutput: `zsh: command not found: ${preparedInputAsArray[0]}`,
      spellEffectHasError: true,
    };
  }
}
