import type { Meta, StoryObj } from '@storybook/react';
import { componentDecorators } from '../../../.storybook/decorators';

import Textarea from './Textarea';
import { errorText, helpText, placeholderText } from '../../stories/helpers';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  decorators: componentDecorators,
  tags: ['autodocs'],
  args: {
    label: 'Textarea'
  }
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Playground: Story = {};

export const WithPlaceholder: Story = {
  name: 'With placeholder',
  args: {
    placeholder: placeholderText
  }
};

export const WithHelp: Story = {
  name: 'With help',
  args: {
    helpText
  }
};

export const WithError: Story = {
  name: 'With error',
  args: {
    errorText,
    forceValidation: true
  }
};

export const WithHelpAndError: Story = {
  name: 'With help and error',
  args: {
    helpText,
    errorText,
    forceValidation: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
