import {spellHintsArray} from '../arrays/spellHintsArray.js';

export default function findCommandMessage(spellword) {
  const rightSpellMessage = spellHintsArray.find(spellHint => spellHint.command === spellword);
  if (rightSpellMessage) {
    return rightSpellMessage.discription;
  } else {
    return 'ERROR: please check if you spelled the command correctly, coding is really strict and otherwise it will not work.';
  }
}
