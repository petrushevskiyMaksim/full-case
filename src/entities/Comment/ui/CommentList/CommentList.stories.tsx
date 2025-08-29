import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { CommentList } from './CommentList';

const meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello world',
                user: {
                    id: '1',
                    username: 'max',
                },
            },
            {
                id: '2',
                text: 'hello world Hello World',
                user: {
                    id: '2',
                    username: 'vasa',
                },
            },
        ],
    },
};

export const Loading: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello world',
                user: {
                    id: '1',
                    username: 'max',
                },
            },
            {
                id: '2',
                text: 'hello world Hello World',
                user: {
                    id: '2',
                    username: 'vasa',
                },
            },
        ],
        isLoading: true,
    },
};
