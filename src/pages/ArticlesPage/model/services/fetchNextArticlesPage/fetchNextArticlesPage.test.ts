import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { articlesPageActions } from '../../slice/articlePageSlice';

jest.mock('../fetchArticlesList/fetchArticlesList');

// Мокаем actions articlesPage
jest.mock('../../slice/articlePageSlice', () => ({
    articlesPageActions: {
        setPage: jest.fn(),
    },
}));

const mockedSetPage = jest.mocked(articlesPageActions.setPage);

describe('fetchNextArticlesPage.test', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('success', async () => {
        //@ts-ignore
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                hasMore: true,
                isLoading: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(mockedSetPage).toHaveBeenCalledWith(3);
    });

    test('fetchArticleList not called', async () => {
        //@ts-ignore
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                hasMore: false,
                isLoading: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedSetPage).not.toHaveBeenCalled();
    });

    test('fetchArticleList is loading', async () => {
        //@ts-ignore
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                hasMore: true,
                isLoading: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedSetPage).not.toHaveBeenCalled();
    });
});
