import React, { useState } from 'react';
import * as style from './PlanQuestionCard.module.css';

function PlanQuestionCard({
  formName,
  question,
  answer1,
  paragraph1,
  answer2,
  paragraph2,
  answer3,
  paragraph3,
}) {
  const [radioValue, setRadioValue] = useState(null);

  return (
    <details className={style.container}>
      <summary className={style.question}>
        <h4>{question}</h4>
      </summary>

      <label className={style.answer}>
        <div
          className={
            radioValue === answer1
              ? `${style.answerContainer} ${style.active}`
              : style.answerContainer
          }
        >
          <span>{answer1}</span>
          <input
            type='radio'
            name={formName}
            id='answer1'
            value={answer1}
            onChange={(e) => {
              setRadioValue(e.target.value);
            }}
          />
          <p className={style.answerParagraph}>{paragraph1}</p>
        </div>
      </label>

      <label className={style.answer}>
        <div
          className={
            radioValue === answer2
              ? `${style.answerContainer} ${style.active}`
              : style.answerContainer
          }
        >
          <span>{answer2}</span>
          <input
            type='radio'
            name={formName}
            id='answer2'
            value={answer2}
            onChange={(e) => {
              setRadioValue(e.target.value);
            }}
          />
          <p className={style.answerParagraph}>{paragraph2}</p>
        </div>
      </label>

      <label className={style.answer}>
        <div
          className={
            radioValue === answer3
              ? `${style.answerContainer} ${style.active}`
              : style.answerContainer
          }
        >
          <span>{answer3}</span>
          <input
            type='radio'
            name={formName}
            id='answer3'
            value={answer3}
            onChange={(e) => {
              setRadioValue(e.target.value);
            }}
          />
          <p className={style.answerParagraph}>{paragraph3}</p>
        </div>
      </label>
    </details>
  );
}

export default PlanQuestionCard;
