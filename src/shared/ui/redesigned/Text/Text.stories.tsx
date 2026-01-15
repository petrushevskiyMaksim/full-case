import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/redesigned/Text',
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
        variant: 'error',
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
        size: 'l',
    },
};

export const SizeM: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        size: 'm',
    },
};

export const SizeS: Story = {
    args: {
        title: 'Lorem ipsum dolor sit amet.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        size: 's',
    },
};
