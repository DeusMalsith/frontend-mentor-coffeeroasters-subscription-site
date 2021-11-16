import React from 'react';
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
  setAnswer,
  answer,
  deactivated,
  first,
}) {
  return (
    <details
      open={deactivated === true ? false : null || first ? true : null}
      className={
        deactivated === true
          ? `${style.container} ${style.deactivated}`
          : style.container
      }
    >
      <summary
        onClick={(e) => {
          if (deactivated === true) {
            e.preventDefault();
          }
        }}
        className={style.question}
      >
        <h4>{question}</h4>
      </summary>

      <div className={style.answerCollection}>
        <label className={style.answer}>
          <div
            className={
              answer === answer1
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
              onClick={(e) => {
                setAnswer(answer !== answer1 ? e.target.value : null);
              }}
              onMouseOver
            />
            <p className={style.answerParagraph}>{paragraph1}</p>
          </div>
        </label>
        <label className={style.answer}>
          <div
            className={
              answer === answer2
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
              onClick={(e) => {
                setAnswer(answer !== answer2 ? e.target.value : null);
              }}
            />
            <p className={style.answerParagraph}>{paragraph2}</p>
          </div>
        </label>
        <label className={style.answer}>
          <div
            className={
              answer === answer3
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
              onClick={(e) => {
                setAnswer(answer !== answer3 ? e.target.value : null);
              }}
            />
            <p className={style.answerParagraph}>{paragraph3}</p>
          </div>
        </label>
      </div>
    </details>
  );
}

export default PlanQuestionCard;
