import * as cls from './ArticlesPageFilters.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
        onChangeOrder,
        onChangeSearch,
        onChangeSort,
        onChangeType,
        onChangeView,
        order,
        search,
        sort,
        type,
        view,
    } = useArticleFilters();

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Поиск')}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    );
});
