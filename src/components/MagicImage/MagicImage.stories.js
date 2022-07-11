import MagicImage from './MagicImage.js';

export default {
  title: 'Components/MagicImage',
  component: MagicImage,
};

const Template = args => <MagicImage {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const FilledWithImage = Template.bind({});
FilledWithImage.args = {
  isRoomEnlighten: true,
  currentBackgroundImage: <img width="245" height="200" alt="" />,
};
