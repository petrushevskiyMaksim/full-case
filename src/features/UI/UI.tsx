import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

interface UIProps {
    className?: string;
}

export const UI = memo((props: UIProps) => {
    const { className } = props;

    return <div className={classNames('', {}, [className])}></div>;
});
