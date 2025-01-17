import type { Meta, StoryObj } from '@storybook/react';
import { componentDecorators } from '../../../.storybook/decorators';

import ProductCard from './ProductCard';
import Tag from '../Tag/Tag';
import Image from '../Image/Image';
import { CARD_VARIANTS } from '../ContentCard';

const meta = {
  title: 'Components/Product card',
  component: ProductCard,
  decorators: componentDecorators,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [undefined, ...CARD_VARIANTS],
      control: { type: 'radio' }
    },
    dropShadow: {
      if: { arg: 'gradientBrand', truthy: false }
    },
    gradientBrand: {
      if: { arg: 'dropShadow', truthy: false }
    },
    tag: {
      control: false
    },
    image: {
      control: false
    }
  }
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Playground: Story = {
  args: {
    texts: {
      title: 'Product card title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
    },
    linkTo: 'docs-demo-link',
    headingLevel: 'h2'
  }
};

// TODO: Check whether we need to keep this modifier since it's identical to the Playground story
export const SemanticCardTitle: Story = {
  name: 'Semantic card title',
  args: {
    ...Playground.args
  }
};

export const NonSemanticCardTitle: Story = {
  name: 'Non-semantic card title',
  args: {
    texts: {
      title: 'Product card title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
    },
    linkTo: 'docs-demo-link',
    assertiveTitle: true
  }
};

export const WithTag: Story = {
  name: 'With tag',
  args: {
    ...Playground.args,
    tag: <Tag>Product family name</Tag>
  }
};

export const WithShadow: Story = {
  name: 'With shadow',
  args: {
    ...Playground.args,
    dropShadow: true
  }
};

export const WithGradient: Story = {
  name: 'With gradient',
  args: {
    ...Playground.args,
    gradientBrand: true
  }
};

export const WithImage: Story = {
  name: 'With image',
  args: {
    ...Playground.args,
    image: <Image ratio="50:50" src="/images/50-50-split.jpg" alt={''} />
  }
};
