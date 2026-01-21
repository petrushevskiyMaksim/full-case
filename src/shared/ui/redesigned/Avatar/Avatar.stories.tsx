import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Avatar } from './Avatar';
import AvatarImg from './avatar.jpg';

const meta = {
    title: 'shared/AvatarRedesigned',
    component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        src: AvatarImg,
        size: 150,
    },
};

export const Small: Story = {
    args: {
        src: AvatarImg,
        size: 50,
    },
};
