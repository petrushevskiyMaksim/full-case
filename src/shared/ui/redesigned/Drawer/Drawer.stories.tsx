import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Drawer } from './Drawer';

const meta = {
    title: 'shared/Drawer',
    component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: <div>{'agsdggsd'}</div>,
    },
};
