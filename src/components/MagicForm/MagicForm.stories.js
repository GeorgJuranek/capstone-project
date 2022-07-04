import MagicForm from './MagicForm.js';

export default {
  title: 'Components/MagicForm',
  component: MagicForm,
};

const Template = args => <MagicForm {...args} />;

export const Default = Template.bind({});
Default.args = {savedOrders: []};
