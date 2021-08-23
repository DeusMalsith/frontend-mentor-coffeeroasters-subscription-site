import React from 'react'
import * as style from './Button.module.css'

function Button({title}) {
    return (
        <div>
            <button className={style.buttonTitle}>{title}</button>
        </div>
    )
}

export default Button
