


import React from 'react'

const TechSvg = ({title, svg}: {title: string; svg: any}) => {
  return (
    <div>
        <div>
            {svg}
        </div>
        <div>
            <h3>{title}</h3>
        </div>
    </div>
  )
}

export default TechSvg