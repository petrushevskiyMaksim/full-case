import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
    const { t } = useTranslation('main');
    const [value, setValue] = useState();

    const onChange = () => {
        setValue(value);
    };

    return <div>{t('Главная страница')}</div>;
}
