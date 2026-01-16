import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated';

const meta = {
    title: 'shared/ArticleListItemDeprecated',
    component: ArticleListItemDeprecated,
} satisfies Meta<typeof ArticleListItemDeprecated>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {

},
};