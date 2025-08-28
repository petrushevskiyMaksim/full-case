import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Commentary } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    Commentary[],
    string | undefined,
    ThunkConfig<string>
>('articleDetails/fetchCommentsByArticleId', async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!articleId) {
        return rejectWithValue('error');
    }

    try {
        const response = await extra.api.get<Commentary[]>(`/comments/`, {
            params: {
                articleId,
                _expand: 'user',
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
