import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Text.module.scss';
import { memo } from 'react';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = memo((props: TextProps) => {
    const { className, title, text, theme = TextTheme.PRIMARY } = props;

    return (
        <div className={classNames('', { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
