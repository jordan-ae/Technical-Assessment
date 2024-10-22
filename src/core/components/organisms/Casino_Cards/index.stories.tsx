import type { Meta, StoryObj } from '@storybook/react';

import { CasinoCard } from './index';
import { JSX } from 'react';

const meta = {
  title: "Casino Cards",
  component: CasinoCard,
  tags: ['autodocs']
} satisfies Meta<typeof CasinoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockData = {
  logo: '/Logo_Grosvenor',
  background: '#f0f0f0',
  casino_name: 'Lucky Spin Casino',
  rating: 5,
  bonus: {
    betAmount: '£20',
    bonusAmount: '£100',
  },
  cta: {
    label: 'Bet Now',
    url: 'https://casino-example.com',
  },
};


export const Default: Story = {
  args: {
    data: mockData
  }
};