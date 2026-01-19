import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { UiDesigneSwitcher } from './UiDesigneSwitcher';

const meta = {
    title: 'features/UiDesigneSwitcher',
    component: UiDesigneSwitcher,
} satisfies Meta<typeof UiDesigneSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};