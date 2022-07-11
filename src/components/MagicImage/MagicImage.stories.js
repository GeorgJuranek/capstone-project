import MagicImage from './MagicImage.js';

export default {
  title: 'Components/MagicImage',
  component: MagicImage,
};

const Template = args => <MagicImage {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const firstRoom = Template.bind({});
firstRoom.args = {
  currentArrayPosition: {
    id: 0,
    path: 'maze/start/',
    type: 'start',
    next: 'middle',
    prev: null,
    image: '../../images/mazeRooms/mazeEnd.png',
  },
  isEnlighten: true,
};
