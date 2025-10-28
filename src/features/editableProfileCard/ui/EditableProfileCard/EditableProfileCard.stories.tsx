import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { EditableProfileCard } from './EditableProfileCard';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'features/EditableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: { id: '1' },
    decorators: [StoreDecorator({})],
};
