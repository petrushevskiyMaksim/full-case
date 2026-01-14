import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { AppLogo } from './AppLogo';

const meta = {
    title: 'shared/AppLogo',
    component: AppLogo,
} satisfies Meta<typeof AppLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
