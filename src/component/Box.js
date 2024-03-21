//rafce
import React from 'react'

const Box = (props) => {

  return (
    <div className={props.result}>
      <h1>{props.title}</h1>
      <img 
          src={props.item && props.item.img}
          className="item-img"/>
      <h2>{props.result}</h2>
    </div>
  )
}

export default Box
