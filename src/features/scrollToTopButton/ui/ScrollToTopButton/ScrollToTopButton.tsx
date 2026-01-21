import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowUp from '@/shared/assets/icons/arrow-up.svg';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = (props: ScrollToTopButtonProps) => {
    const { className } = props;

    const onClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Icon
            Svg={ArrowUp}
            clickable
            onClick={onClick}
            width={32}
            height={32}
            className={classNames('', {}, [className])}
        />
    );
};
