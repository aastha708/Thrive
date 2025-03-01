import React from 'react'
import ProgramCardUI from './ProgramCardUI'

import './ProgramCard.css'

export default function Programcard() {

  return (
    <div className="program_outer">
      <h1>Our <span>Program's</span></h1>
      <div className="programs">
      <ProgramCardUI 
          imgno="img1" 
          title="Nutritions & Calories" 
          des="Log your meals throughout the day to see the nutrient breakdown, and to track your calories content." 
          link="calorie-counter" // Link to CalorieCalculator component
        />
        <ProgramCardUI 
          imgno="img2" 
          title="Weight" 
          des="Log your weight so that you can see the direct relationship between progress toward your weight and fitness goals."  
          link="bmi" // Link to BMI component
        />
        <ProgramCardUI 
          imgno="img3" 
          title="Workout Plan" 
          des="Log your customised workouts to hold yourself and see the payoff. Unleash your potential and hit new milestones!" 
          link="exercise" // Link to Workout component
        />
        
      </div>
    </div>
    
  
  )

}











 











// container
    // <div className='programs'>

    //     <ProgramCardUI imgno='img1' title='Nutritions & Calories' des='Log your meals throughout the day to see the nutrient breakdown,and to track your calories content.'/>
    //     <ProgramCardUI imgno='img2' title='Weight' des='Log your weight so that you can see the direct relationship between progress toward your weight and fitness goals.'/>
    //     <ProgramCardUI imgno='img3' title='Workout Plan' des='Log your customised workouts to hold yourself and see the payoff! Unleash your potential and hit new milestones.'/>
      
      
    // </div>


{/* <div className='program'>
        <div className='image-section img1' ></div>
        <div className='content'>
          <h2>Nutritions & Calories</h2>
          <p>Log your meals throughout the day to see the nutrient breakdown,and to track your calories content.</p>
          <button>Continue</button>
        </div>
      </div>

      <div className='program'>
        <div className='image-section img2' ></div>
        <div className='content'>
          <h2>Weight</h2>
          <p>Log your weight so that you can see the direct relationship between progress toward your weight and fitness goals.</p>
          <button>Continue</button>
        </div>
      </div>

      <div className='program'>
        <div className='image-section img3' ></div>
        <div className='content'>
          <h2>Workout Plan</h2>
          <p>Log your customised workouts to hold yourself and see the payoff!</p>
          <button>Continue</button>
        </div>
      </div> */}