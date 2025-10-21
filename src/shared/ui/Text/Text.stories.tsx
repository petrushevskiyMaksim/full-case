import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
};

export const Error: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        theme: TextTheme.ERROR,
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet.',
    },
};

export const onlyText: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTitleDark: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTextDark: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeL: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        size: TextSize.L,
    },
};

export const SizeM: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        size: TextSize.M,
    },
};

export const SizeS: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        size: TextSize.S,
    },
};
