import * as cls from './CommentCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Commentary } from '../../model/types/commentary';
import { Avatar as AvatarDeprecate } from '@/shared/ui/deprecated/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { getRouteProfile } from '@/shared/const/router';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Text } from '@/shared/ui/redesigned/Text';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';

interface CommentCardProps {
    comment?: Commentary;
    className?: string;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return (
            <VStack
                data-testid='CommentCard.Loading'
                gap='8'
                max
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border='50%' />
                    <Skeleton
                        height={16}
                        width={100}
                        className={cls.username}
                    />
                </div>
                <Skeleton width={'100%'} height={50} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <Card padding='24' border='roundBorder' max>
                    <VStack
                        data-testid='CommentCard.Content'
                        gap='8'
                        max
                        className={classNames(cls.CommentCardRedesigned, {}, [
                            className,
                        ])}
                    >
                        <AppLink to={getRouteProfile(comment.user.id)}>
                            <HStack gap='8'>
                                {comment.user.avatar ? (
                                    <Avatar
                                        src={comment.user.avatar}
                                        size={30}
                                    />
                                ) : null}

                                <Text title={comment.user.username} bold />
                            </HStack>
                        </AppLink>

                        <Text text={comment.text} />
                    </VStack>
                </Card>
            }
            off={
                <VStack
                    data-testid='CommentCard.Content'
                    gap='8'
                    max
                    className={classNames(cls.CommentCard, {}, [className])}
                >
                    <AppLinkDeprecated to={getRouteProfile(comment.user.id)}>
                        {comment.user.avatar ? (
                            <AvatarDeprecate
                                src={comment.user.avatar}
                                size={30}
                            />
                        ) : null}

                        <TextDeprecated title={comment.user.username} />
                    </AppLinkDeprecated>

                    <TextDeprecated text={comment.text} />
                </VStack>
            }
        />
    );
});


