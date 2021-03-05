import React from 'react'

export const  BackgroundCircle = ({centerY, strokeWidth}) => {
    return (
        <circle
          r={centerY - strokeWidth / 2}
          fill="yellow"
          stroke="black"
          stroke-width={strokeWidth}
        />
    )
}


