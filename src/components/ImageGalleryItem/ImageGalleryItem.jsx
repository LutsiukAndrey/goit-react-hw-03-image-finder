import React from 'react';
import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  imageLink,
  imagAlt,
  largeImageURL,
  modalFn,
  id,
  onClick,
}) => {
  return (
    <li className={s.ImageGalleryItem} onClick={onClick}>
      <img
        className={s.ImageGalleryItemImage}
        src={imageLink}
        alt={imagAlt}
        id={id}
      />
    </li>
  );
};
