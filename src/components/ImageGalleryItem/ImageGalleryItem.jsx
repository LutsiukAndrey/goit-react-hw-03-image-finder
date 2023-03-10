import React from 'react';
import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  imageLink,
  imagAlt,
  largeImageURL,
  modalFn,
  id,
}) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
        src={imageLink}
        alt={imagAlt}
        id={id}
      />
    </li>
  );
};
