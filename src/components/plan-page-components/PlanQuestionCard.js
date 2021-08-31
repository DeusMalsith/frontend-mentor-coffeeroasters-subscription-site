import React from 'react';
import * as style from './PlanQuestionCard.module.css';

function PlanQuestionCard({
  question,
  answer1,
  paragraph1,
  answer2,
  paragraph2,
  answer3,
  paragraph3,
}) {
  return (
    <details>
      <summary>
        <h4>{question}</h4>
      </summary>
      <div>
        <h4>{answer1}</h4>
        <p>{paragraph1}</p>
      </div>
      <div>
        <h4>{answer2}</h4>
        <p>{paragraph2}</p>
      </div>
      <div>
        <h4>{answer3}</h4>
        <p>{paragraph3}</p>
      </div>
    </details>
  );
}

export default PlanQuestionCard;
