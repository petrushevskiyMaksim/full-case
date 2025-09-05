import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article, string> {
    view: ArticleView;

    isLoading?: boolean;
    error?: string;

    // Pagination
    page: number;
    limit?: number;
    hasMore: boolean;
}
