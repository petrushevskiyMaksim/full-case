import * as cls from './ArticleImageBlockComponents.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleImageBlock } from '../../model/types/article';
import { Text as TextDepracated, TextAlign } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleImageBlockComponentsProps {
    block: ArticleImageBlock;
    className?: string;
}

export const ArticleImageBlockComponents = memo(
    (props: ArticleImageBlockComponentsProps) => {
        const { className, block } = props;

        return (
            <div
                className={classNames(cls.ArticleImageBlockComponents, {}, [
                    className,
                ])}
            >
                <img className={cls.img} src={block.src} alt={block.title} />
                {block.title && (
                    <ToggleFeatures
                        feature='isAppRedesigned'
                        on={<Text text={block.title} align={'center'} />}
                        off={
                            <TextDepracated
                                text={block.title}
                                align={TextAlign.CENTER}
                            />
                        }
                    />
                )}
            </div>
        );
    }
);
