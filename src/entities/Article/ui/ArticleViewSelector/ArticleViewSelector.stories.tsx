import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from 'entities/Article/model/types/article';

const meta = {
    title: 'shared/ArticleViewSelector',
    component: ArticleViewSelector,
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        view: ArticleView.BIG,
    },
};
