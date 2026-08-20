import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./BlogCard.scss";
import { useSyncExternalStore } from "react";
const subscribe = (callback: () => void) => {
    if (typeof window !== "undefined") {
        window.addEventListener("resize", callback);
        return () => window.removeEventListener("resize", callback);
    }
    return () => {};
};

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

    const imageSrc =
        hasError || !imageUrl
            ? "https://i.pinimg.com/736x/b5/a1/31/b5a13172ba3251884efef78778dcc11d.jpg"
            : imageUrl;
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
