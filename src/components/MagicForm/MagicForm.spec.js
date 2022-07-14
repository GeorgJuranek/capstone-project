import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MagicForm from './MagicForm.js';

describe('MagicForm', () => {
  it('has an accessible input', () => {
    render(<MagicForm savedOrders={[]} />);
    const input = screen.getByLabelText('type in your command');
    expect(input).toBeInTheDocument();
  });

  it('has a button and it is accessible', async () => {
    render(<MagicForm savedOrders={[]} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('Magicform function gets called with Enter on keyboard', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();
    render(<MagicForm processingLatestSpell={callback} savedOrders={[]} />);
    const input = screen.getByLabelText('type in your command');
    await user.type(input, 'something should happen{Enter}');
    expect(callback).toHaveBeenCalledWith('something should happen');
  });

  it('renders the amount of savedOrders', () => {
    render(<MagicForm savedOrders={[]} />);
    const orderLength = screen.getByTestId('savedOrders');
    expect(orderLength).toHaveTextContent(0);
  });

  it('renders the amount of 3 savedOrders', () => {
    render(<MagicForm savedOrders={['one', 'two', 'three']} />);
    const orderLength = screen.getByTestId('savedOrders');
    expect(orderLength).toHaveTextContent(3);
  });
});
