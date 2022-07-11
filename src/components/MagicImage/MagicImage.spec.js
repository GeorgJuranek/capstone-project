import {render, screen} from '@testing-library/react';

import MagicImage from './MagicImage.js';

describe('MagicForm', () => {
  it('the backgroundImage is an accessible image', () => {
    render(
      <MagicImage
        currentArrayPosition={{
          id: 0,
          path: 'maze/start/',
          type: 'start',
          next: 'middle',
          prev: null,
          image: '../../images/mazeRooms/mazeEnd.png',
        }}
      />
    );
    const backgroundImg = screen.getByAltText('the end of the way');
    expect(backgroundImg).toBeInTheDocument();
  });
});
