import type { Meta, StoryObj } from '@storybook/react';
import { componentDecorators } from '../../../.storybook/decorators';

import Accordion from './Accordion';
import AccordionPanel from './AccordionPanel';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  decorators: componentDecorators,
  argTypes: {
    children: {
      control: false
    }
  }
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Playground: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionPanel heading="Accordion 1">Accordion panel 1</AccordionPanel>
      <AccordionPanel heading="Accordion 2">Accordion panel 2</AccordionPanel>
      <AccordionPanel heading="Accordion 3">Accordion panel 3</AccordionPanel>
    </Accordion>
  )
};

export const Stoplight: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionPanel heading="Accordion 1" stoplightColor="red">
        Accordion panel 1
      </AccordionPanel>
      <AccordionPanel heading="Accordion 2" stoplightColor="yellow">
        Accordion panel 2
      </AccordionPanel>
      <AccordionPanel heading="Accordion 3" stoplightColor="green">
        Accordion panel 3
      </AccordionPanel>
    </Accordion>
  )
};
