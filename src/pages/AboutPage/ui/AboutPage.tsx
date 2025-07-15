import { useTranslation } from 'react-i18next';
import { memo } from 'react';

export default memo(function AboutPage() {
    const { t } = useTranslation('about');

    return <div>{t('О сайте')}</div>;
});
