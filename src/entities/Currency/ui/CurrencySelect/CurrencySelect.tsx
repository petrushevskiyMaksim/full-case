import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange]
    );

    return (
        <ListBox
            className={classNames('', {}, [className])}
            value={value}
            items={options}
            label={t('Укажите валюту')}
            defaultValue={t('Укажите валюту')}
            onChange={onChangeHandler}
            readonly={readonly}
            direction='bottom left'
        ></ListBox>
    );
});
