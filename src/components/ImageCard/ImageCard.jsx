export default function ImageCard({ image, onImageClick }) {
    return (
        <div >
            <img
                onClick={() => onImageClick(image.url, image.alt_description || 'Image')}
                src={image.url} alt={image.alt_description || 'Image'} />
        </div>
    );
}