import React from 'react'
import './Card.css'

export default function CardUI(props) {
  return (

    <div className='card text-center shadow'>

    <div className='overflow'><img src={props.imgsrc} alt=""  className='card-img-top'/> </div>

    <div className='card-body '>
      
      <h2 className='cdtitle'>{props.title}</h2>
      <p className='card-text '>
        {props.des}
      </p>

      <button className=''>Continue</button>
    </div>

  </div>
  )
}
