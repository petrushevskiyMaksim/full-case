import { Decorator } from '@storybook/react-webpack5';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from '@/features/addCommentForm/model/slice/addCommentFormSlice';
import { articleDetailsCommentsReducer } from '@/pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import { articleDetailsPageRecommendationsReducer } from '@/pages/ArticleDetailsPage/model/slice/articleDetailsPageRecommendationSlice';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments:articleDetailsCommentsReducer,
    articleDetailsRecommendaions: articleDetailsPageRecommendationsReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema> = {}, asyncReducers?: ReducersList): Decorator => (Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        );
