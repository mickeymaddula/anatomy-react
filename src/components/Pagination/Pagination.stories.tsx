import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { componentDecorators } from '../../../.storybook/decorators';

import Pagination from './Pagination';
import Link from '../Link';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered'
  },
  decorators: componentDecorators,
  tags: ['autodocs'],
  args: {
    numberOfPages: 14
  }
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Playground: Story = {
  args: {
    numberOfPages: 14,
    currentPage: 3,
    locale: 'en-US'
  }
};

export const AsLinks: Story = ({ ...args }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginationItem = (page: number, isCurrent: boolean) => (
    <Link href="docs-demo-link" aria-current={!isCurrent ? undefined : 'page'}>
      {page}
    </Link>
  );

  return (
    <Pagination
      currentPage={currentPage}
      paginationItem={paginationItem}
      numberOfPages={args.numberOfPages}
      onChange={(page) => setCurrentPage(page)}
    />
  );
};

AsLinks.storyName = 'As links';
