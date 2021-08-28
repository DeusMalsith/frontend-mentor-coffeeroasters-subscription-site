import React from 'react';
import * as style from './Hero.module.css';

function Hero({ background, title, paragraph, children }) {
  return (
    <div
      className={style.container}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h1 className={style.heroText}>{title}</h1>
      <p className={style.pText}>{paragraph}</p>
      <div>{children}</div>
    </div>
  );
}

export default Hero;
