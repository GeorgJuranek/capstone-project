import catSpell from './commandSpells/catSpell';
import cdSpell from './commandSpells/cdSpell';
import lsSpell from './commandSpells/lsSpell';
import pwdSpell from './commandSpells/pwdSpell';
import zSpell from './commandSpells/zSpell';

export default function executeSpell(preparedInstruction, currentPosition, onChangePosition, onChangeEnlighten) {
  if (preparedInstruction[0] === 'pwd') {
    return pwdSpell(preparedInstruction, currentPosition);
  } else if (preparedInstruction[0] === 'ls') {
    return lsSpell(preparedInstruction, currentPosition, onChangeEnlighten);
  } else if (preparedInstruction[0] === 'cd') {
    return cdSpell(preparedInstruction, currentPosition, onChangePosition);
  } else if (preparedInstruction[0] === 'cat') {
    return catSpell(preparedInstruction, currentPosition);
  } else if (preparedInstruction[0] === 'z') {
    return zSpell(preparedInstruction, onChangePosition);
  } else {
    return {
      spellEffectMessage: 'a magic voice that whispers: ',
      spellEffectOutput: `zsh: command not found: ${preparedInstruction[0]}`,
      spellEffectHasError: true,
    };
  }
}
