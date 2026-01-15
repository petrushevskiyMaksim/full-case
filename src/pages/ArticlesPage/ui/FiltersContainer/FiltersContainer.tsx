import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
        onChangeOrder,
        onChangeSearch,
        onChangeSort,
        onChangeType,
        order,
        search,
        sort,
        type,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            search={search}
            onChangeSearch={onChangeSearch}
            order={order}
            onChangeOrder={onChangeOrder}
            sort={sort}
            onChangeSort={onChangeSort}
            type={type}
            onChangeType={onChangeType}
            className={className}
        />
    );
});
