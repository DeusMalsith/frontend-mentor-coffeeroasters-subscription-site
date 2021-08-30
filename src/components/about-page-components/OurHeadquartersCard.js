import React from 'react';
import * as style from './OurHeadquartersCard.module.css';

function OurHeadquartersCard({
  image,
  imageAlt,
  title,
  address,
  city,
  state,
  number,
}) {
  return (
    <div className={style.container}>
      <img className={style.image} src={image} alt={imageAlt} />
      <div className={style.subContainer}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.info}>{address}</p>
        <p className={style.info}>{city}</p>
        <p className={style.info}>{state}</p>
        <p className={style.info}>{number}</p>
      </div>
    </div>
  );
}

export default OurHeadquartersCard;
