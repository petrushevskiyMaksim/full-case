import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { http, HttpResponse } from 'msw';
import { Article } from '@/entities/Article';

const meta = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

const article: Article = {
    id: '1',
    img: '',
    createAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '134',
    subtitle: '1asfas',
};

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
    parameters: {
        msw: {
            handlers: [
                http.get(`${__API__}/articles?_limit=5`, () => {
                    return HttpResponse.json([
                        { ...article, id: '1' },
                        { ...article, id: '2' },
                        { ...article, id: '3' },
                        { ...article, id: '4' },
                        { ...article, id: '5' },
                    ]);
                }),
            ],
        },
    },
};
