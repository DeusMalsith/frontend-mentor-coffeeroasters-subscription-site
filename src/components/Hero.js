import React from 'react';
import * as style from './Hero.module.css';

function Hero({ pageName, title, paragraph, children }) {
  const home = [
    `${style.homeContainer}`,
    `${style.homeTitle}`,
    `${style.homeParagraph}`,
  ];
  const about = [
    `${style.aboutContainer}`,
    `${style.aboutTitle}`,
    `${style.aboutParagraph}`,
  ];
  const plan = [
    `${style.planContainer}`,
    `${style.planTitle}`,
    `${style.planParagraph}`,
  ];

  let classNameValue = '';

  if (pageName === 'home') {
    classNameValue = home;
  }
  if (pageName === 'about') {
    classNameValue = about;
  }
  if (pageName === 'plan') {
    classNameValue = plan;
  }

  return (
    <div className={`${classNameValue[0]}`}>
      <h1 className={`${classNameValue[1]}`}>{title}</h1>
      <p className={`${classNameValue[2]}`}>{paragraph}</p>
      <div>{children}</div>
    </div>
  );
}

export default Hero;
