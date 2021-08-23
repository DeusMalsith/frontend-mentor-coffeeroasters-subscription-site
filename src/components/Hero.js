import React from 'react';
import * as style from './Hero.module.css';

function Hero({ title, paragraph, children }) {
  return (
    <div className={style.container}>
      <h1 className={style.heroText}>{title}</h1>
      <p className={style.pText}>{paragraph}</p>
      <div>{children}</div>
    </div>
  );
}

export default Hero;
