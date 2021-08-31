import React from 'react';
import * as style from './PlanStepsCard.module.css';

function PlanStepsCard({ number, title, paragraph }) {
  return (
    <div className={style.container}>
      <h1 className={style.number}>{number}</h1>
      <h4 className={style.title}>{title}</h4>
      <p className={style.paragraph}>{paragraph}</p>
    </div>
  );
}

export default PlanStepsCard;
