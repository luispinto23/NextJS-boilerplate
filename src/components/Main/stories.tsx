import Main from '.';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Main',
  component: Main
} as Meta;

export const Default: Story = args => <Main {...args} />;
