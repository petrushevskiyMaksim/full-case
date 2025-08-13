import { memo } from 'react';
import { useTranslation } from 'react-i18next';

export default memo(function MainPage() {
    const { t } = useTranslation('main');

    return <div style={{ color: 'green' }}>{t('Главная страница')}</div>;
});
