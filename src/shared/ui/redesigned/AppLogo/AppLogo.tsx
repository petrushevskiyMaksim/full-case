import * as cls from './AppLogo.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import AppLogoIcon from '@/shared/assets/icons/app-logo.svg';
import { HStack } from '../Stack';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className, size = 50 } = props;

    return (
        <HStack
            max
            justify='center'
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <AppLogoIcon
                className={cls.appLogo}
                width={size}
                height={size}
                color='black'
            />
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
        </HStack>
    );
});
