import * as cls from './ArticleListItemRedesigned.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleListItemProps } from '../ArticleListItem';
import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Button } from '@/shared/ui/redesigned/Button';
import { getRouteArticlesDetails } from '@/shared/const/router';
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts';
import { ArticleTextBlock } from '../../../model/types/article';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();

    const userInfo = (
        <>
            <Avatar size={32} src={article.user.avatar} />
            <Text bold text={article.user.username} />
        </>
    );
    const views = (
        <HStack gap='8'>
            <Icon Svg={EyeIcon} />
            <Text className={cls.views} text={String(article.views)} />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock;

        return (
            <Card
                padding='24'
                max
                data-testid='ArticleListItem'
                className={classNames('', {}, [className, cls[view]])}
            >
                <VStack max gap='16'>
                    <HStack max gap='8'>
                        {userInfo}
                        <Text text={article.createAt} />
                    </HStack>
                    <Text bold title={article.title} />
                    <Text size='s' bold title={article.subtitle} />
                    <AppImage
                        fallback={<Skeleton width={'100%'} height={250} />}
                        className={cls.img}
                        src={article.img}
                        alt={article.title}
                    />
                    {textBlock?.paragraphs && (
                        <Text
                            className={cls.textBlock}
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                        />
                    )}
                    <HStack max justify='between'>
                        <AppLink
                            target={target}
                            to={getRouteArticlesDetails(article.id)}
                        >
                            <Button variant={'outline'}>
                                {t('Читать далее')}
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            data-testid='ArticleListItem'
            className={classNames('', {}, [className, cls[view]])}
            target={target}
            to={getRouteArticlesDetails(article.id)}
        >
            <Card className={cls.card} border='roundBorder'>
                {/* <div className={cls.imageWrapper}> */}
                <AppImage
                    fallback={<Skeleton width={200} height={200} />}
                    className={cls.img}
                    src={article.img}
                    alt={article.title}
                />
                <VStack className={cls.info} gap='4'>
                    <Text className={cls.title} text={article.title} />
                    <VStack max gap='4' className={cls.footer}>
                        <HStack max justify='between'>
                            <Text
                                className={cls.date}
                                text={article.createAt}
                            />
                            {views}
                        </HStack>
                        <HStack gap='4'>{userInfo}</HStack>
                    </VStack>
                </VStack>
                {/* </div> */}
                {/* <div className={cls.infoWrapper}>{types}</div> */}
            </Card>
        </AppLink>
    );
});
