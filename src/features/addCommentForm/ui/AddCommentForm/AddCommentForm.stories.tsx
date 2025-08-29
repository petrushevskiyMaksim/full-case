import type { Meta, StoryObj } from '@storybook/react-webpack5';
import AddCommentForm from './AddCommentForm';
import { fn } from '@storybook/test';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        onSendComment: fn(),
    },
    decorators: [StoreDecorator({})],
};
