import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { CommentCard } from './CommentCard';

const meta = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comment: {
            id: '1',
            text: 'hello world',
            user: {
                id: '1',
                username: 'max',
            },
        },
    },
};

export const Loading: Story = {
    args: {
        comment: {
            id: '1',
            text: 'hello world',
            user: {
                id: '1',
                username: 'max',
            },
        },
        isLoading: true,
    },
};
