import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, onImageClick }) {
    if (!items || items.length === 0) {
        return <p>No images found.</p>;
    }

    return (
        <ul className={css.imageGallery}>
            {items.map((image) => (
                <li key={image.id} className={css.imageItem}>
                    <ImageCard image={image} onImageClick={onImageClick} />
                </li>
            ))}
        </ul>
    );
}