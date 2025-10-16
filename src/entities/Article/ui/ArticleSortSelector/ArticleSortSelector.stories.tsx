import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticleSortSelector } from './ArticleSortSelector';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { fn } from '@storybook/test';

const meta = {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        sort: ArticleSortField.CREATED,
        order: 'asc',
        onChangeOrder: fn(),
        onChangeSort: fn(),
    },
};
