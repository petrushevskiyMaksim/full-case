import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
} satisfies Meta<typeof ArticleDetailsComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: { id: '1' },
    decorators: [StoreDecorator({})],
};
