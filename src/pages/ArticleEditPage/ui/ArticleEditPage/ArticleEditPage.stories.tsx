import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticleEditPage } from './ArticleEditPage';

const meta = {
    title: 'shared/ArticleEditPage',
    component: ArticleEditPage,
} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {

},
};