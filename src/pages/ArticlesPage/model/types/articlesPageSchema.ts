import { EntityState } from '@reduxjs/toolkit';
import {
    Article,
    ArticleSortField,
    ArticleType,
    ArticleView,
} from 'entities/Article';

import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article, string> {
    isLoading?: boolean;
    error?: string;
    // Pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    _inited: boolean;
}
