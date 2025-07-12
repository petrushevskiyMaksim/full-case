import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';

export default function MainPage() {
    const { t } = useTranslation('main');

    return <div>{t('Главная страница')}</div>;
}
