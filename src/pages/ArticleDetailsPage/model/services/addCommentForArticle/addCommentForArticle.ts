import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from '../../../../../entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Commentary } from '@/entities/Comment';
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArtcile = createAsyncThunk<
    Commentary,
    string,
    ThunkConfig<string>
>('articleDetails/addCommentForArtcile', async (text, thunkApi) => {
    const { dispatch, extra, rejectWithValue, getState } = thunkApi;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
        return rejectWithValue('no Data');
    }

    try {
        const response = await extra.api.post<Commentary>('/comments', {
            articleId: article.id,
            userId: userData.id,
            text,
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentsByArticleId(article.id));

        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
