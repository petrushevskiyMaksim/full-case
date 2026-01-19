import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';
import { useParams } from 'react-router-dom';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = (props: DetailsContainerProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    return (
        <Card max padding='24' border='roundBorder' className={className}>
            <ArticleDetails id={id} />
        </Card>
    );
};
