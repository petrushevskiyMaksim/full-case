import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { fn } from '@storybook/test';
import { ArticleType } from '../../model/consts/consts';

const meta = {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        value: ArticleType.ALL as ArticleType,
        onChangeType: fn(),
    },
};
