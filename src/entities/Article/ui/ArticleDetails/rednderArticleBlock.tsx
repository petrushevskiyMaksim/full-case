import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponents } from '../ArticleImageBlockComponents/ArticleImageBlockComponents';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

export const renderArticleBlock = (block: ArticleBlock) => {
    // prettier-ignore
    switch (block.type) {
    case ArticleBlockType.CODE:
        return (
            <ArticleCodeBlockComponent key={block.id} block={block} />
        );
    case ArticleBlockType.IMAGE:
        return (
            <ArticleImageBlockComponents key={block.id} block={block} />
        );
    case ArticleBlockType.TEXT:
        return (
            <ArticleTextBlockComponent key={block.id} block={block} />
        );

    default:
        return null;
    }
};
