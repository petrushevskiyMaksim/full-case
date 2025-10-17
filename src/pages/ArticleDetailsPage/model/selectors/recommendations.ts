import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) =>
    state?.articleDetailsRecommendaions?.isLoading;

export const getArticleRecommendationsError = (state: StateSchema) =>
    state?.articleDetailsRecommendaions?.error;
