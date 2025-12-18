import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { http, HttpResponse } from 'msw';

const meta = {
    title: 'features/ArticleRating',
    component: ArticleRating,
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithRate: Story = {
    args: { articleId: '1' },
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' },
            },
        }),
    ],
    parameters: {
        msw: {
            handlers: [
                http.get(
                    `${__API__}/article-ratings?userId=1&articleId=1`,
                    () => {
                        return HttpResponse.json([
                            {
                                rate: 4,
                            },
                        ]);
                    }
                ),
            ],
        },
    },
};

export const WithoutRate: Story = {
    args: { articleId: '1' },
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' },
            },
        }),
    ],
    parameters: {
        msw: {
            handlers: [
                http.get(
                    `${__API__}/article-ratings?userId=1&articleId=1`,
                    () => {
                        return HttpResponse.json([]);
                    }
                ),
            ],
        },
    },
};
