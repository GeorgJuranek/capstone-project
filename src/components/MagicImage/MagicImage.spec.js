import {render, screen} from '@testing-library/react';

import mazeEnd from '../../images/mazeRooms/mazeEnd.png';

import MagicImage from './MagicImage.js';

describe('MagicImage', () => {
  it('the backgroundImage is an accessible image', () => {
    render(<MagicImage currentBackgroundImage={{image: mazeEnd, altText: 'the end of the way'}} />);
    const backgroundImgTest = screen.getByAltText('the end of the way');
    expect(backgroundImgTest).toBeInTheDocument();
  });
});
