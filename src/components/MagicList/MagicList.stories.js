import MagicList from './MagicList.js';

export default {
  title: 'Components/MagicList',
  component: MagicList,
  //argTypes: {analyzeSpell: {action: 'analyzeSpell'}},
};

//const Template = args => <MagicForm {...args} />;
//export const Default = Template.bind({});

const Template = args => <MagicList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  //
  savedOrders: [],
};
