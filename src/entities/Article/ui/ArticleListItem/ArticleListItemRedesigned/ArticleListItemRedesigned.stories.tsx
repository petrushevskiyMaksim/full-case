import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned';

const meta = {
    title: 'shared/ArticleListItemRedesigned',
    component: ArticleListItemRedesigned,
} satisfies Meta<typeof ArticleListItemRedesigned>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
