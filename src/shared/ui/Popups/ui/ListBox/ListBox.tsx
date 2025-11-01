import * as cls from './ListBox.module.scss';
import {
    Listbox as HListBox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { DropdownDirection } from 'shared/types/ui';
import { HStack } from '../../../Stack';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../../../Button/Button';
import { mapDirectionClass } from '../../styles/consts';
import * as popupCls from '../../styles/popups.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    label?: string;
    direction?: DropdownDirection;
}

export function ListBox(props: ListBoxProps) {
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

    const optionsClasses = [mapDirectionClass[direction]];

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
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
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
