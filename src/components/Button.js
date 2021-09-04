import React from 'react';
import * as style from './Button.module.css';

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className={style.buttonTitle}>
      {children}
    </button>
  );
}

export default Button;
