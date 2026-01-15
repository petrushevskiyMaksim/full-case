import * as cls from './StyckyContentLayout.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactElement } from 'react';

interface StyckyContentLayoutProps {
    className?: string;
    left?: ReactElement;
    content: ReactElement;
    right?: ReactElement;
}

export const StyckyContentLayout = memo((props: StyckyContentLayoutProps) => {
    const { className, content, left, right } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            {right && <div className={cls.left}>{left}</div>}
            <div className={cls.content}>{content}</div>
            {left && <div className={cls.right}>{right}</div>}
        </div>
    );
});
