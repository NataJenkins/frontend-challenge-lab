import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./BlogCard.scss";
import { useSyncExternalStore } from "react";
const subscribe = () => () => {};

type BlogCardProps = {
    imageUrl?: string;
    category?: string;
    cardTitle: string;
    cardDescription: string;
};

export default function BlogCard({
    imageUrl,
    category,
    cardTitle,
    cardDescription,
}: BlogCardProps) {
    const [hasError, setHasError] = useState(false);

    const isClient = useSyncExternalStore(
        subscribe,
        () => true,
        () => false,
    );

    const fallbackImageUrl =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='340' height='288' viewBox='0 0 340 288'%3E%3Crect width='340' height='288' fill='%23E5E7EB'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236B7280' font-family='sans-serif' font-size='16'%3ENo%20image%3C/text%3E%3C/svg%3E";
    const imageSrc = hasError || !imageUrl ? fallbackImageUrl : imageUrl;
    return (
        <figure className="blog-card">
            {isClient && (
                <img
                    className="card-image"
                    src={imageSrc}
                    alt={cardTitle}
                    onError={() => {
                        if (!hasError) {
                            setHasError(true);
                        }
                    }}
                    loading="lazy"
                    decoding="async"
                    width={340}
                    height={288}
                />
            )}
            <div className="card-info">
                {category && <span className="category-badge">{category}</span>}
                <figcaption>
                    <h2 className="card-title" title={cardTitle}>
                        {cardTitle}
                    </h2>
                    <p className="card-description" title={cardDescription}>
                        {cardDescription}
                    </p>
                </figcaption>
                <button className="read-more-button" type="button">
                    Read More <FaArrowRight />
                </button>
            </div>
        </figure>
    );
}
