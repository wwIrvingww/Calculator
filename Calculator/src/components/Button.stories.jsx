import React from 'react';
import Button from './Button';

export default {
  title: 'Calculator/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const NumberButton = Template.bind({});
NumberButton.args = {
  name: '1',
  onClick: () => {},
  className: '',
};

export const OperationButton = Template.bind({});
OperationButton.args = {
  name: '+',
  onClick: () => {},
  className: '',
};

export const ActiveButton = Template.bind({});
ActiveButton.args = {
  name: '5',
  onClick: () => {},
  className: 'active',
};
