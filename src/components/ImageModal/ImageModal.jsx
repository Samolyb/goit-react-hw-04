import React from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css';

export default function ImageModal({ isOpen, closeModal, imageUrl, altDescription, author, likes, description }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className={css.content}
            overlayClassName={css.overlay}
            contentLabel="Image Modal"
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
        >
            <div className={css.modalContent}>
                <img src={imageUrl} alt={altDescription} className={css.image} />
                <div className={css.details}>
                    {altDescription && <h2 className={css.title}>{altDescription}</h2>}
                    {author && <p className={css.author}><strong>Author:</strong> {author}</p>}
                    {likes !== undefined && <p className={css.likes}><strong>Likes:</strong> {likes}</p>}
                    {description && <p className={css.description}><strong>Description:</strong> {description}</p>}
                </div>
                <button onClick={closeModal} className={css.closeButton}>Close</button>
            </div>
        </Modal>
    );
}