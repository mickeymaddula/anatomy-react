import type { Meta, StoryObj } from '@storybook/react';
import { componentDecorators } from '../../../.storybook/decorators';

import Fieldset from './Fieldset';
import InputText from '../InputText/InputText';
import Textarea from '../Textarea/Textarea';
import { errorText, helpText } from '../../stories/helpers';

const meta = {
  title: 'Components/Fieldset',
  component: Fieldset,
  decorators: componentDecorators,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false
    }
  }
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Playground: Story = {
  args: {
    legend: 'Legend'
  },
  render: (args) => (
    <Fieldset {...args}>
      <InputText className="bsds-mt-2x" label="Related text input" />
      <Textarea className="bsds-mt-3x" label="Related textarea" />
    </Fieldset>
  )
};

export const WithHelp: Story = {
  name: 'With help',
  args: {
    legend: 'Legend',
    helpText: helpText
  },
  render: (args) => (
    <Fieldset {...args}>
      <InputText className="bsds-mt-2x" label="Related text input" />
      <Textarea className="bsds-mt-3x" label="Related textarea" />
    </Fieldset>
  )
};

export const WithError: Story = {
  name: 'With error',
  args: {
    legend: 'Legend',
    errorText: errorText
  },
  render: (args) => (
    <Fieldset {...args}>
      <InputText className="bsds-mt-2x" label="Related text input" />
      <Textarea className="bsds-mt-3x" label="Related textarea" />
    </Fieldset>
  )
};

export const WithHelpAndError: Story = {
  name: 'With help and error',
  args: {
    legend: 'Legend',
    helpText: helpText,
    errorText: errorText
  },
  render: (args) => (
    <Fieldset {...args}>
      <InputText className="bsds-mt-2x" label="Related text input" />
      <Textarea className="bsds-mt-3x" label="Related textarea" />
    </Fieldset>
  )
};
