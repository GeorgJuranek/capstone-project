import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MagicForm from './MagicForm.js';

describe('MagicForm', () => {
  it('is an accessible form', () => {
    render(<MagicForm />);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });
  it('Button of Form is an accessible button', () => {
    render(<MagicForm />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('Input of Form is an accessible input', () => {
    render(<MagicForm />);
    const input = screen.getByLabelText('type in your command');
    expect(input).toBeInTheDocument();
  });

  it('MagicForm onSubmit function gets called with Enter on keyboard', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();
    render(<MagicForm analyzeSpell={callback} />);
    const input = screen.getByLabelText('type in your command');
    await user.type(input, 'something should happen{Enter}');
    expect(callback).toHaveBeenCalled();
  });

  it('MagicForm onSubmit function gets called with button', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();
    render(<MagicForm analyzeSpell={callback} />);
    const button = screen.getByRole('button');
    await user.click(button);
    expect(callback).toHaveBeenCalled();
  });
});
