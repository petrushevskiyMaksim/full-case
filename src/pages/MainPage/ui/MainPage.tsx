import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

export default function MainPage() {
    const { t } = useTranslation('main');
    const [value, setValue] = useState();

    const onChange = () => {
        setValue(value);
    };

    return (
        <div>
            {t('Главная страница')}
            <Input
                placeholder={'Введите текст'}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
