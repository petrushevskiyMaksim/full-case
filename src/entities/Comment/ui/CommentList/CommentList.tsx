import * as cls from './CommentList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Commentary } from '../../model/types/commentary';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Commentary[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}
                    />
                ))
            ) : (
                <Text text={t('Комментарии отсутствуют')} />
            )}
        </div>
    );
});
