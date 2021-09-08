import React from 'react';
import * as style from './WhyChooseUsCard.module.css';

function WhyChooseUsCard({ image, imageAlt, title, paragraph }) {
  return (
    <div className={style.card}>
      <img src={image} alt={imageAlt} className={style.image} />
      <div className={style.subContainer}>
        <h4>{title}</h4>
        <p className={style.paragraph}>{paragraph}</p>
      </div>
    </div>
  );
}

export default WhyChooseUsCard;
