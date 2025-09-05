import { RefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: RefObject<HTMLElement | null>;
    wrapperRef: RefObject<HTMLElement | null>;
}

export const useInfiniteScroll = ({
    callback,
    triggerRef,
    wrapperRef,
}: UseInfiniteScrollOptions) => {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;

        if (callback) {
            if (!wrapperRef.current || !triggerRef.current) {
                return;
            }

            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                scrollMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerRef.current);
        }

        return () => {
            if (observer && triggerRef.current) {
                observer.unobserve(triggerRef.current);
            }
        };
    }, [triggerRef, wrapperRef, callback]);
};
