import {spellHintsArray} from '../arrays/spellHintsArray.js';

export default function findSpellMessage(spellword) {
  spellHintsArray.forEach(spellHint => {
    if (spellHint.command === spellword) {
      console.log(spellHint.discription);
      return spellHint.discription;
    } else {
      return '(!)ERROR: please check if you spelled the command correctly, coding is really strict and otherwise it will not work.';
    }
  });
}
