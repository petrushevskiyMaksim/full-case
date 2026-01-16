import * as cls from './ListBox.module.scss';
import {
    Listbox as HListBox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '../../../../redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../../../Button/Button';
import { mapDirectionClass } from '../../styles/consts';
import * as popupCls from '../../styles/popups.module.scss';
import { Icon } from '../../../Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-sidebar.svg';

export interface ListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    label?: string;
    direction?: DropdownDirection;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        label,
        direction = 'bottom left',
    } = props;

    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);

    return (
        <HStack gap='8'>
            {label && <span>{`${label} >`}</span>}
            <HListBox
                className={classNames('', {}, [className, popupCls.popup])}
                as={'div'}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <ListboxButton
                    // className={cls.trigger}
                    disabled={readonly}
                    as={Fragment}
                >
                    {/* {value ?? defaultValue} */}
                    <Button
                        variant='filled'
                        disabled={readonly}
                        addonRight={<Icon Svg={ArrowIcon} />}
                    >
                        {selectedItem?.content ?? defaultValue}
                    </Button>
                </ListboxButton>
                <ListboxOptions
                    portal={false}
                    className={classNames(cls.options, {}, optionsClasses)}
                    // anchor={{ to: 'bottom start' }}
                >
                    {items?.map((item) => (
                        <ListboxOption
                            as={Fragment}
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({ focus, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.focus]: focus,
                                            [popupCls.disabled]: item.disabled,
                                        },
                                        []
                                    )}
                                >
                                    <HStack align='center' gap='4'>
                                        {item.content}
                                        {selected && (
                                            <CheckIcon className={cls.icon} />
                                        )}
                                    </HStack>
                                </li>
                            )}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </HListBox>
        </HStack>
        // </Field>
    );
}
