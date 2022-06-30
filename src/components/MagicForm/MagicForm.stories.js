import MagicForm from './MagicForm.js';

export default {
  title: 'Components/MagicForm',
  component: MagicForm,
  //argTypes: {analyzeSpell: {action: 'analyzeSpell'}},
};

//const Template = args => <MagicForm {...args} />;
//export const Default = Template.bind({});

const Template = args => <MagicForm {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  analyzeSpell: {action: console.log('whyy?')},
};
