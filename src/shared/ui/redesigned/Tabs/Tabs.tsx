import * as cls from './Tabs.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { Card } from '../Card/Card';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
    direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, onTabClick, value, direction = 'row' } = props;

    const clickHandle = useCallback(
        (tab: TabItem) => {
            return () => {
                onTabClick(tab);
            };
        },
        [onTabClick]
    );

    return (
        <Flex
            align='start'
            gap='8'
            direction={direction}
            className={classNames(cls.Tabs, {}, [className])}
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value;
                return (
                    <Card
                        className={classNames(cls.tab, {
                            [cls.selected]: isSelected,
                        })}
                        variant={isSelected ? 'light' : 'normal'}
                        key={tab.value}
                        onClick={clickHandle(tab)}
                        border='roundBorder'
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
});
