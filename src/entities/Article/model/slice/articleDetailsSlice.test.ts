import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article, ArticleBlockType, ArticleType } from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

const mockArticle: Article = {
    id: '1',
    title: 'title',
    subtitle: 'subtitle',
    img: 'img',
    views: 1000,
    createAt: '20.08.2025',
    type: [ArticleType.IT, ArticleType.SCIENCE],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.CODE,
            code: 'console.log("Hello World");',
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'https://example.com/image1.jpg',
            title: 'Test Image',
        },
        {
            id: '3',
            type: ArticleBlockType.TEXT,
            paragraphs: ['First paragraph of text', 'Second paragraph of text'],
            title: 'Test Text Block',
        },
    ],
};

describe('articleDetailsSlice.test', () => {
    test('test article details service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: undefined,
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending('', '1')
            )
        ).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('test article details service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            error: undefined,
            data: undefined,
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(mockArticle, 'request-id', '1')
            )
        ).toEqual({
            isLoading: false,
            error: undefined,
            data: mockArticle,
        });
    });

    test('test article details service rejected', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: undefined,
            data: undefined,
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.rejected(
                    new Error(),
                    'request-id',
                    '1',
                    'Error message'
                )
            )
        ).toEqual({
            isLoading: false,
            error: 'Error message', // устанавливается ошибка
            data: undefined,
        });
    });
});
