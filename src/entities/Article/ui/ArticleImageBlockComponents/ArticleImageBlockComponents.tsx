import * as cls from './ArticleImageBlockComponents.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleImageBlock } from '../../model/types/article';
import { Text, TextAlign } from 'shared/ui/Text/Text';

interface ArticleImageBlockComponentsProps {
    block: ArticleImageBlock;
    className?: string;
}

export const ArticleImageBlockComponents = memo(
    (props: ArticleImageBlockComponentsProps) => {
        const { className, block } = props;
        const { t } = useTranslation();

        return (
            <div className={classNames('', {}, [className])}>
                <img className={cls.img} src={block.src} alt={block.title} />
                {block.title && (
                    <Text text={block.title} align={TextAlign.CENTER} />
                )}
            </div>
        );
    }
);
