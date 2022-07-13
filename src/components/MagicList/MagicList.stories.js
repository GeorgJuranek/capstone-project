import MagicList from './MagicList.js';

export default {
  title: 'Components/MagicList',
  component: MagicList,
};

const Template = args => <MagicList {...args} />;

export const Default = Template.bind({});
Default.args = {
  savedOrders: [],
};
