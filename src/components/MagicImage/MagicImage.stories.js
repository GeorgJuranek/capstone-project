import mazeEnd from '../../images/mazeRooms/mazeEnd.png';

import MagicImage from './MagicImage.js';

export default {
  title: 'Components/MagicImage',
  component: MagicImage,
};

const Template = args => <MagicImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentBackgroundImage: {image: mazeEnd, altText: ''},
};

export const FilledWithImage = Template.bind({});
FilledWithImage.args = {
  currentBackgroundImage: {image: mazeEnd, altText: ''},
  isRoomEnlighten: true,
};
