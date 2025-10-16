import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta = {
    title: 'pages/ArticlePage/ArticlesPageFilters',
    component: ArticlesPageFilters,
} satisfies Meta<typeof ArticlesPageFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
