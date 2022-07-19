import {render, screen} from '@testing-library/react';

import MagicImage from './MagicImage.js';

describe('MagicImage', () => {
  it('has an accessible image', () => {
    render(
      <MagicImage
        currentPosition={{
          id: 1,
          path: 'maze/home/hall/',
          type: 'hall',
          posName: 'hall',
          next: ['fork'],
          prev: 'maze/home/',
          items: [],
        }}
        currentBackgroundImage={{image: 'test.png', altText: 'the end of the way'}}
      />
    );
    const backgroundImgTest = screen.getByAltText('the end of the way');
    expect(backgroundImgTest).toBeInTheDocument();
  });
});
