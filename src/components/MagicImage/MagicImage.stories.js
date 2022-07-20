import chamber from '../../images/mazeRooms/chamber.png';

import MagicImage from './MagicImage.js';

export default {
  title: 'Components/MagicImage',
  component: MagicImage,
};

const Template = args => <MagicImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentBackgroundImage: {image: chamber, altText: ''},
  currentPosition: {
    id: 1,
    path: 'maze/home/hall/',
    type: 'hall',
    posName: 'hall',
    next: ['fork'],
    prev: 'maze/home/',
    items: [],
  },
};

export const Enlightened = Template.bind({});
Enlightened.args = {
  currentBackgroundImage: {image: chamber, altText: ''},
  isRoomEnlighten: true,
  currentPosition: {
    id: 1,
    path: 'maze/home/hall/',
    type: 'hall',
    posName: 'hall',
    next: ['fork'],
    prev: 'maze/home/',
    items: [],
  },
};
