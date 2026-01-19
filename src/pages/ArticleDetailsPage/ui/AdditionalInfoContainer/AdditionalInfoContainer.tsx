import { getArticleDetailsData } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { useSelector } from 'react-redux';
import * as cls from './AdditionalInfoContainer.module.scss';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouteArticlesEdit } from '@/shared/const/router';

export const AdditionalInfoContainer = memo(() => {
    const article = useSelector(getArticleDetailsData);
    const navigate = useNavigate();

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticlesEdit(article.id));
        }
    }, [navigate, article]);

    if (!article) {
        return;
    }

    return (
        <Card className={cls.card} padding='24' border='roundBorder'>
            <ArticleAdditionalInfo
                onEdit={onEditArticle}
                author={article.user}
                createAt={article.createAt}
                views={article.views}
            ></ArticleAdditionalInfo>
        </Card>
    );
});
