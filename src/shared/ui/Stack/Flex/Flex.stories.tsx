import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Flex } from './Flex';

const meta = {
    title: 'shared/Flex',
    component: Flex,
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
    args: {
        children: (
            <>
                <div>{'first'}</div>
                <div>{'first'}</div>
                <div>{'first'}</div>
                <div>{'first'}</div>
            </>
        ),
    },
};

export const RowGap4: Story = {
    args: {
        gap: '4',
        children: (
            <>
                <div>{'first'}</div>
                <div>{'first'}</div>
                <div>{'first'}</div>
                <div>{'first'}</div>
            </>
        ),
    },
};
export const RowGap8: Story = {
    args: {
        gap: '8',
        children: (
            <>
                <div>{'first'}</div>
                <div>{'first'}</div>
                <div>{'first'}</div>
                <div>{'first'}</div>
            </>
        ),
    },
};
export const RowGap16: Story = {
    args: {
        gap: '16',
        children: (
            <>
                <div>{'first'}</div>
                <div>{'first'}</div>
                <div>{'first'}</div>
                <div>{'first'}</div>
            </>
        ),
    },
};
export const RowGap32: Story = {
    args: {
        gap: '32',
        children: (
            <>
                <div>{'first'}</div>
                <div>{'first'}</div>
                <div>{'first'}</div>
                <div>{'first'}</div>
            </>
        ),
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>{'first'}</div>
                <div>{'first'}</div>
                <div>{'first'}</div>
                <div>{'first'}</div>
            </>
        ),
    },
};

export const ColumnGap4: Story = {
    args: {
        direction: 'column',
        gap: '4',
        children: (
            <>
                <div>{'first'}</div>
                <div>{'first'}</div>
                <div>{'first'}</div>
                <div>{'first'}</div>
            </>
        ),
    },
};

export const ColumnAlignEnd: Story = {
    args: {
        direction: 'column',
        align: 'end',
        children: (
            <>
                <div>{'first'}</div>
                <div>{'first'}</div>
                <div>{'first'}</div>
                <div>{'first'}</div>
            </>
        ),
    },
};
