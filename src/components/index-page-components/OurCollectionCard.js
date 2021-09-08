import React from 'react';
import * as style from './OurCollectionCard.module.css';

function OurCollectionCard({ imageSrc, imageAlt, title, paragraph }) {
  return (
    <div className={style.container}>
      <img src={imageSrc} alt={imageAlt} className={style.image} />
      <div className={style.subContainer}>
        <h4 className={style.title}>{title}</h4>
        <p className={style.paragraph}>{paragraph}</p>
      </div>
    </div>
  );
}

export default OurCollectionCard;
