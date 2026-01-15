import { RefObject, useEffect, useRef } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: RefObject<HTMLElement>;
    wrapperRef?: RefObject<HTMLElement>;
}

export const useInfiniteScroll = ({
    callback,
    triggerRef,
    wrapperRef,
}: UseInfiniteScrollOptions) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const wrapperElement = wrapperRef?.current || null;
        const triggerElement = triggerRef.current;

        if (callback) {
            // if (!triggerElement || !wrapperElement) {
            //     return;
            // }

            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                scrollMargin: '0px',
                threshold: 1.0,
            };

            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.current.observe(triggerElement);
        }

        return () => {
            if (observer.current && triggerElement) {
                observer.current.unobserve(triggerElement);
            }
        };
    }, [triggerRef, wrapperRef, callback]);
};
