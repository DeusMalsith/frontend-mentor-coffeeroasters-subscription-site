import React from 'react'

function Hero({title, paragraph, children}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <div>{children}</div>
        </div>
    )
}

export default Hero
