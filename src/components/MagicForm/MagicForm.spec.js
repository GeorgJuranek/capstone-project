import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MagicForm from './MagicForm.js';

describe('MagicForm', () => {
  it('Form is an accessible form', () => {
    render(<MagicForm savedOrders={[]} />);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  it('Input of Form is an accessible input', () => {
    render(<MagicForm savedOrders={[]} />);
    const input = screen.getByLabelText('type in your command');
    expect(input).toBeInTheDocument();
  });

  it('MagicForm has 2 buttons and both are accessible', async () => {
    render(<MagicForm savedOrders={[]} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('MagicForm function gets called with Enter on keyboard', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();
    render(<MagicForm saveSpellOrder={callback} savedOrders={[]} />);
    const input = screen.getByLabelText('type in your command');
    await user.type(input, 'something should happen{Enter}');
    expect(callback).toHaveBeenCalled();
  });
});
