import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { http, HttpResponse } from 'msw';

const notification = [
    {
        id: '1',
        heading: 'Уведомление 1',
        description: ' Произошло какое то событие',
        userId: '1',
    },
    {
        id: '2',
        heading: 'Уведомление 2',
        description: ' Произошло какое то событие В admin',
        userId: '1',
        href: 'http://localhost:3000/admin',
    },
    {
        id: '3',
        heading: 'Уведомление 3',
        description: ' Произошло какое то событие В admin',
        userId: '1',
        href: 'http://localhost:3000/admin',
    },
    {
        id: '4',
        heading: 'Уведомление 4',
        description: ' Произошло какое то событие В profile',
        userId: '1',
        href: 'http://localhost:3000/profile',
    },
    {
        id: '5',
        heading: 'Уведомление 5',
        description: ' Произошло какое то событие',
        userId: '1',
    },
];

const meta = {
    title: 'shared/NotificationList',
    component: NotificationList,
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    parameters: {
        msw: {
            handlers: [
                http.get(`${__API__}/notification`, () => {
                    return HttpResponse.json([...notification]);
                }),
            ],
        },
    },
};
