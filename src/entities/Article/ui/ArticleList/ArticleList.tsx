import * as cls from './ArticleList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, HTMLAttributeAnchorTarget, JSX } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import {
    AutoSizer,
    List,
    ListRowProps,
    WindowScroller,
} from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';

interface ArticleListProps {
    articles: Article[];
    className?: string;
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));
};

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props;
    const { t } = useTranslation();

    const isBig = view === ArticleView.BIG;

    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig
        ? articles.length
        : Math.ceil(articles.length / itemsPerRow);

    const rowRender = ({ index, isScrolling, key, style }: ListRowProps) => {
        const items: JSX.Element[] = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i++) {
            items.push(
                <ArticleListItem
                    className={cls.card}
                    article={articles[i]}
                    view={view}
                    target={target}
                    key={`str${i}`}
                />
            );
        }

        return (
            <div key={key} style={style} className={cls.row}>
                {items}
            </div>
        );
    };

    // const renderArticle = (article: Article) => {
    //     return (
    //         <ArticleListItem
    //             className={cls.card}
    //             article={article}
    //             view={view}
    //             key={article.id}
    //             target={target}
    //         />
    //     );
    // };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <WindowScroller
            onScroll={() => console.log('scroll')}
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                height,
                width,
                registerChild,
                onChildScroll,
                scrollTop,
                isScrolling,
            }) => (
                <div
                    ref={registerChild}
                    className={classNames('', {}, [className, cls[view]])}
                >
                    <List
                        height={height ?? 700}
                        width={width ? width - 80 : 700}
                        rowCount={rowCount}
                        rowHeight={isBig ? 700 : 330}
                        rowRenderer={rowRender}
                        autoHeight
                        onScroll={onChildScroll}
                        isScrolling={isScrolling}
                        scrollTop={scrollTop}
                    />

                    {/* {articles?.length > 0 ? articles?.map(renderArticle) : null} */}
                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});
