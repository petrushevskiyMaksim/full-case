import { EntityState } from '@reduxjs/toolkit';
import { Commentary } from 'entities/Comment';

export interface ArticleDetailsCommentsSchema
    extends EntityState<Commentary, string> {
    isLoading?: boolean;
    error?: string;
}
