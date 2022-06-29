import MagicForm from './MagicForm.js';

export default {
  title: 'Components/MagicForm',
  component: MagicForm,
  argTypes: {handleTest: {action: 'handleTest'}},
};

const Template = args => <MagicForm {...args} />;

export const Default = Template.bind({});
