import React from 'react'
import CardUI from './CardUI'
import './Card.css'

export default function Card() {
  return (
    <div className='container-fluid d-flex jutify-content-center'>
      <div className='row'>

        <div className='col-md-4'>
            <CardUI imgsrc='Images/nutrition_counting.png' title='Nutritions & Calories' des='Log your meals throughout the day to see the nutrient breakdown,and to track your calories content.'/>
        </div>
        <div className='col-md-4'>
            <CardUI imgsrc='Images/weight.jpg' title='Weight' des='Log your weight so that you can see the direct relationship between progress toward your weight and fitness goals.'/>
        </div>
        <div className='col-md-4'>
            <CardUI imgsrc='Images/workout-schedule.jpg' title='Workout Plan' des='Log your customised workouts to hold yourself and see the payoff!'/>
        </div>
        
      </div>
     
    </div>
  )
}
