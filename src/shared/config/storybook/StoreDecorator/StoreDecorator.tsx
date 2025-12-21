import { Decorator } from '@storybook/react-webpack5';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

//TODO

// eslint-disable-next-line gapone-plugin/public-api-imports
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line gapone-plugin/public-api-imports
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
// eslint-disable-next-line gapone-plugin/public-api-imports
import { addCommentFormReducer } from '@/features/addCommentForm/model/slice/addCommentFormSlice';
// eslint-disable-next-line gapone-plugin/public-api-imports
import { articleDetailsCommentsReducer } from '@/pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
// eslint-disable-next-line gapone-plugin/public-api-imports
import { articleDetailsPageRecommendationsReducer } from '@/pages/ArticleDetailsPage/model/slice/articleDetailsPageRecommendationSlice';
// eslint-disable-next-line gapone-plugin/public-api-imports
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
