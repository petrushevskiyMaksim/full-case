import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/ButtonRedesigned',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        variant: 'clear',
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
        size: 'l',
    },
};
export const OutlineSizeXl: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
        size: 'xl',
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Square: Story = {
    args: {
        children: '><',
        variant: 'clear',
        square: true,
        size: 'm',
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '><',
        variant: 'clear',
        square: true,
        size: 'l',
    },
};

export const SquareSizeXl: Story = {
    args: {
        children: '><',
        variant: 'clear',
        square: true,
        size: 'xl',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Text',
        disabled: true,
        variant: 'outline',
    },
};
