import * as cls from './ArticleListItem.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import type { Article } from '../../model/types/article';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import type { ArticleTextBlock } from '../../model/types/article';
import { Text } from '@/shared/ui/deprecated/Text';
import IconEye from '@/shared/assets/icons/eye-20-20.svg';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { getRouteArticlesDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/deprecated/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink';

interface ArticleListItemProps {
    article: Article;
    view: ArticleView;
    className?: string;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();

    const types = <Text className={cls.types} text={article.type.join(', ')} />;
    const views = (
        <>
            <Text className={cls.views} text={String(article.views)} />
            <Icon Svg={IconEye} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock;

        return (
            <div
                data-testid='ArticleListItem'
                className={classNames('', {}, [className, cls[view]])}
            >
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text
                            className={cls.username}
                            text={article.user.username}
                        />
                        <Text className={cls.date} text={article.createAt} />
                    </div>

                    <Text className={cls.title} text={article.title} />

                    {types}

                    <AppImage
                        fallback={<Skeleton width={'100%'} height={250} />}
                        className={cls.img}
                        src={article.img}
                        alt={article.title}
                    />

                    {textBlock && (
                        <ArticleTextBlockComponent
                            className={cls.textBlock}
                            block={textBlock}
                        />
                    )}

                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={getRouteArticlesDetails(article.id)}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('Читать далее')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            data-testid='ArticleListItem'
            className={classNames('', {}, [className, cls[view]])}
            target={target}
            to={getRouteArticlesDetails(article.id)}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        className={cls.img}
                        src={article.img}
                        alt={article.title}
                    />
                    <Text className={cls.date} text={article.createAt} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text className={cls.title} text={article.title} />
            </Card>
        </AppLink>
    );
});
