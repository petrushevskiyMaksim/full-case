import * as cls from './ArticleListItem.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import type { Article } from '../../model/types/article';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import type { ArticleTextBlock } from '../../model/types/article';
import { Text } from '@/shared/ui/Text';
import IconEye from '@/shared/assets/icons/eye-20-20.svg';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { RoutePath } from '@/shared/const/router';
import { AppLink } from '@/shared/ui';

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
            <div className={classNames('', {}, [className, cls[view]])}>
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

                    <img
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
                            to={RoutePath.articles_details + article.id}
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
            className={classNames('', {}, [className, cls[view]])}
            target={target}
            to={RoutePath.articles_details + article.id}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <img
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
