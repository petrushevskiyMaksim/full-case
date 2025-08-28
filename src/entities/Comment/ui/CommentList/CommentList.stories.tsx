import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { CommentList } from './CommentList';

const meta = {
    title: 'shared/CommentList',
    component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {

},
};