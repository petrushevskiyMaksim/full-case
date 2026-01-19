import { classNames } from '@/shared/lib/classNames/classNames';
import * as cls from './ArticleAdditionalInfo.module.scss';
import { User } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { useTranslation } from 'react-i18next';

interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createAt: string;
    views: number;
    onEdit: () => void;
}

export const ArticleAdditionalInfo = (props: ArticleAdditionalInfoProps) => {
    const { className, author, createAt, views, onEdit } = props;
    const { t } = useTranslation();

    return (
        <VStack
            gap='32'
            className={classNames(cls.ArticleAdditionalInfo, {}, [className])}
        >
            <HStack gap='8'>
                <Avatar src={author.avatar} size={32} />
                <Text text={author.username} bold />
                <Text text={createAt} />
            </HStack>
            <Button onClick={onEdit}>{t('edit')}</Button>
            <Text text={t('views', { count: views })} />
        </VStack>
    );
};
