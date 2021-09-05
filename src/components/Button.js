import React from 'react';
import * as style from './Button.module.css';

function Button({ children, onClick, type }) {
  return (
    <button type={type} onClick={onClick} className={style.buttonTitle}>
      {children}
    </button>
  );
}

export default Button;
