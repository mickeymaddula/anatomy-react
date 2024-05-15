import { useState, ChangeEvent } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { componentDecorators } from '../../../.storybook/decorators';

import RadioGroup from './RadioGroup';
import InputRadio from '../InputRadio';
import { errorText, helpText } from '../../stories/helpers';

const meta = {
  title: 'Components/Radio group',
  component: RadioGroup,
  decorators: componentDecorators,
  argTypes: {
    children: {
      control: false
    }
  },
  args: {
    legend: 'Legend'
  }
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

// TODO: Check IDs for duplicates after deciding if we want stories on docs

export const Playground: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <InputRadio label="Radio 1" name="groupDefault" value="defaultRadio1" defaultChecked />
      <InputRadio label="Radio 2" name="groupDefault" value="defaultRadio2" />
      <InputRadio label="Radio 3" name="groupDefault" value="defaultRadio3" />
    </RadioGroup>
  )
};

export const WithHelp: Story = {
  name: 'With help',
  args: {
    helpText
  },
  render: (args) => (
    <RadioGroup {...args}>
      <InputRadio label="Radio 1" name="groupDefault" value="defaultRadio1" defaultChecked />
      <InputRadio label="Radio 2" name="groupDefault" value="defaultRadio2" helpText={helpText} />
      <InputRadio label="Radio 3" name="groupDefault" value="defaultRadio3" />
    </RadioGroup>
  )
};

interface Radio {
  label: string;
  value: string;
  helpText?: string;
}

const radios = [
  {
    label: 'Radio 1',
    value: 'defaultRadio1'
  },
  {
    label: 'Radio 2',
    value: 'defaultRadio2',
    helpText: helpText
  },
  {
    label: 'Radio 3',
    value: 'defaultRadio3'
  }
];

export const WithError = ({ ...args }) => {
  const [error, setError] = useState(errorText);
  const handleChange = (e: ChangeEvent<HTMLInputElement>, radio: Radio) => {
    setError(radio.value === 'defaultRadio2' ? '' : errorText);
  };
  return (
    <RadioGroup legend="Legend" errorText={error}>
      {radios.map((radio, i) => (
        <InputRadio
          key={'checkboxListWithError' + radio.label}
          label={radio.label}
          name="groupDefault"
          value={radio.value}
          defaultChecked={i === 0}
          helpText={radio.helpText ?? undefined}
          forceValidation
          onChange={(e) => handleChange(e, radio)}
        />
      ))}
    </RadioGroup>
  );
};
WithError.storyName = 'With error';

export const WithHelpAndError = ({ ...args }) => {
  const [error, setError] = useState(errorText);
  const handleChange = (e: ChangeEvent<HTMLInputElement>, radio: Radio) => {
    setError(radio.value === 'defaultRadio2' ? '' : errorText);
  };
  return (
    <RadioGroup legend="Legend" errorText={error} helpText={helpText}>
      {radios.map((radio, i) => (
        <InputRadio
          key={'checkboxListWithError' + radio.label}
          label={radio.label}
          name="groupDefault"
          value={radio.value}
          defaultChecked={i === 0}
          helpText={radio.helpText ?? undefined}
          forceValidation
          onChange={(e) => handleChange(e, radio)}
        />
      ))}
    </RadioGroup>
  );
};
WithHelpAndError.storyName = 'With help and error';

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <InputRadio label="Radio 1" name="groupDisabled" value="disabledRadio1" defaultChecked disabled />
      <InputRadio label="Radio 2" name="groupDisabled" value="disabledRadio2" disabled />
      <InputRadio label="Radio 3" name="groupDisabled" value="disabledRadio3" disabled />
    </RadioGroup>
  )
};

export const ButtonGroup: Story = {
  name: 'Button group',
  render: (args) => (
    <RadioGroup buttonGroup {...args}>
      <InputRadio
        label="Radio 1"
        name="groupButtonStyleRadio"
        value="groupButtonStyleRadio1"
        defaultChecked
        forceValidation
      />
      <InputRadio label="Radio 2" name="groupButtonStyleRadio" value="groupButtonStyleRadio2" />
      <InputRadio label="Radio 3" name="groupButtonStyleRadio" value="groupButtonStyleRadio3" inputUnavailable />
    </RadioGroup>
  )
};

export const ButtonGroupWithHelp: Story = {
  name: 'Button group with help',
  args: {
    helpText
  },
  render: (args) => (
    <RadioGroup buttonGroup {...args}>
      <InputRadio
        label="Radio 1"
        name="groupButtonStyleRadio"
        value="groupButtonStyleRadio1"
        defaultChecked
        forceValidation
      />
      <InputRadio label="Radio 2" name="groupButtonStyleRadio" value="groupButtonStyleRadio2" />
      <InputRadio label="Radio 3" name="groupButtonStyleRadio" value="groupButtonStyleRadio3" inputUnavailable />
    </RadioGroup>
  )
};

export const ButtonGroupWithError: Story = {
  name: 'Button group with error',
  args: {
    errorText
  },
  render: (args) => (
    <RadioGroup buttonGroup {...args}>
      <InputRadio
        label="Radio 1"
        name="groupButtonStyleRadio"
        value="groupButtonStyleRadio1"
        defaultChecked
        forceValidation
      />
      <InputRadio label="Radio 2" name="groupButtonStyleRadio" value="groupButtonStyleRadio2" />
      <InputRadio label="Radio 3" name="groupButtonStyleRadio" value="groupButtonStyleRadio3" inputUnavailable />
    </RadioGroup>
  )
};

export const ButtonGroupWithHelpAndError: Story = {
  name: 'Button group with help and error',
  args: {
    helpText,
    errorText
  },
  render: (args) => (
    <RadioGroup buttonGroup {...args}>
      <InputRadio
        label="Radio 1"
        name="groupButtonStyleRadio"
        value="groupButtonStyleRadio1"
        defaultChecked
        forceValidation
      />
      <InputRadio label="Radio 2" name="groupButtonStyleRadio" value="groupButtonStyleRadio2" />
      <InputRadio label="Radio 3" name="groupButtonStyleRadio" value="groupButtonStyleRadio3" inputUnavailable />
    </RadioGroup>
  )
};

export const ButtonGroupDisabled: Story = {
  name: 'Button group disabled',
  render: (args) => (
    <RadioGroup buttonGroup {...args}>
      <InputRadio
        label="Radio 1"
        name="groupButtonStyleRadioDisabled"
        value="groupButtonStyleRadioDisabled1"
        defaultChecked
        disabled
      />
      <InputRadio
        label="Radio 2"
        name="groupButtonStyleRadioDisabled"
        value="groupButtonStyleRadioDisabled2"
        disabled
      />
      <InputRadio
        label="Radio 3"
        name="groupButtonStyleRadioDisabled"
        value="groupButtonStyleRadioDisabled3"
        inputUnavailable
        disabled
      />
    </RadioGroup>
  )
};
