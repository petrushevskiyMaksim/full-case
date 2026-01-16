import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticlesFilters } from './ArticlesFilters';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { fn } from '@storybook/test';

const meta = {
    title: 'widget/ArticlesFilters',
    component: ArticlesFilters,
} satisfies Meta<typeof ArticlesFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        order: 'asc',
        search: 'searcg',
        sort: ArticleSortField.CREATED,
        type: ArticleType.ALL,
        onChangeOrder: fn(),
        onChangeSearch: fn(),
        onChangeSort: fn(),
        onChangeType: fn(),
    },
};
