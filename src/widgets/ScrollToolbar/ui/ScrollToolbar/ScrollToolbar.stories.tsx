import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ScrollToolbar } from './ScrollToolbar';

const meta = {
    title: 'shared/ScrollToolbar',
    component: ScrollToolbar,
} satisfies Meta<typeof ScrollToolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
