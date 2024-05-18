import React from 'react';
import Display from './Display';

export default {
  title: 'Calculator/Display',
  component: Display,
};

const Template = (args) => <Display {...args} />;

export const EmptyDisplay = Template.bind({});
EmptyDisplay.args = {
  value: '',
};

export const NumberDisplay = Template.bind({});
NumberDisplay.args = {
  value: '123',
};

export const ErrorDisplay = Template.bind({});
ErrorDisplay.args = {
  value: 'Error',
};
