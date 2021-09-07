import React from 'react';
import * as style from './Button.module.css';

function Button({ children, onClick, type, disabled }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={style.buttonTitle}
    >
      {children}
    </button>
  );
}

export default Button;
