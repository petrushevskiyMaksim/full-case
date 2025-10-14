import * as cls from './UI.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface UIProps {
    className?: string;
}

export const UI = memo((props: UIProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return <div className={classNames(cls.UI, {}, [className])}>

    </div>;
});