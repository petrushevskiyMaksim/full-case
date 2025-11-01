import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { AvatarDropdown } from './AvatarDropdown';

const meta = {
    title: 'shared/AvatarDropdown',
    component: AvatarDropdown,
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
