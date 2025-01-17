import { useState, useEffect } from 'react';
import type { Meta } from '@storybook/react';
import { componentDecorators } from '../../../.storybook/decorators';

import ContentCard from '../ContentCard/ContentCard';
import CardGroup from './CardGroup';
import { descriptionPlaceholder } from '../../helpers/stories.helpers';

const meta = {
  title: 'Components/Card group',
  component: CardGroup,
  decorators: componentDecorators,
  argTypes: {
    children: {
      control: false
    }
  }
} satisfies Meta<typeof CardGroup>;

export default meta;

export const Playground = ({ ...args }) => {
  const [numOfCards, setNumOfCards] = useState(2);

  useEffect(() => {
    if (args.cardLayout?.includes('twoUp')) {
      setNumOfCards(2);
    } else if (args.cardLayout?.includes('threeUp')) {
      setNumOfCards(3);
    } else if (args.cardLayout?.includes('fourUp')) {
      setNumOfCards(4);
    }
  }, [args.cardLayout, setNumOfCards]);

  return (
    <CardGroup cardLayout={args.cardLayout} className={args.className}>
      {[...Array(numOfCards)].map((_card, i) => (
        <ContentCard
          // eslint-disable-next-line react/no-array-index-key
          key={`${_card}` + i}
          texts={{
            cardTitle: 'Card title',
            cardDescription: descriptionPlaceholder
          }}
          headingLevel="h2"
        />
      ))}
    </CardGroup>
  );
};
