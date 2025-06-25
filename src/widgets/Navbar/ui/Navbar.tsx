/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>

            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatibus magnam unde nesciunt porro nihil atque
                voluptatem ratione alias est, facere at esse odio nobis tempore
                aspernatur dignissimos autem earum maiores nam officiis pariatur
                veniam voluptas. At qui consectetur provident inventore neque?
                Minus doloribus magnam saepe quidem culpa libero obcaecati
                suscipit, officiis aperiam corporis voluptate illum explicabo
                eius consectetur nihil, possimus ipsam incidunt. Cumque aperiam
                ad, omnis pariatur, aut voluptates atque illum a corrupti veniam
                esse accusantium amet. Dolore qui optio modi provident,
                recusandae officia laboriosam tenetur vero totam repellat,
                asperiores eveniet veniam beatae deserunt debitis labore nemo
                cupiditate odit.
            </Modal>
        </div>
    );
};
