import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MagicForm from './MagicForm.js';

describe('MagicForm', () => {
  it('MagicForm gets input', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();
    render(<MagicForm saySpell={callback} />);
    const input = screen.getByLabelText('type in your command');
    await user.type(input, 'something should happen{Enter}');
    expect(callback).toHaveBeenCalled();
  });

  it('MagicForm gets checked and returns the exspect-string if "cd" is typed in', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();
    // i want to check the return of a function, that is called in the one i mock here. Is this possible?
    render(<MagicForm saySpell={callback()} />);
    const input = screen.getByLabelText('type in your command');
    await user.type(input, 'cd{Enter}');
    const listitem = screen.getByText(
      'The command "cd" stands for "change directory", so you can jump from one directory in another one. This is so important. '
    );
    expect(listitem).toContain(
      'The command "cd" stands for "change directory", so you can jump from one directory in another one. This is so important. '
    );
  });
});
