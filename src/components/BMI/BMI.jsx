import React, { useState } from 'react';
import './BMI.css';

export default function BMI() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('lbs');
  const [heightUnit, setHeightUnit] = useState('in');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [imgSrc, setImgSrc] = useState(null);

  function calcBmi(event) {
    event.preventDefault();

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
      alert('Please enter a valid weight and height');
      return;
    }

    let bmi;

    if (weightUnit === 'kg' && heightUnit === 'cm') {
      const heightInMeters = heightNum / 100;
      bmi = weightNum / (heightInMeters * heightInMeters);
    } else if (weightUnit === 'kg' && heightUnit === 'm') {
      bmi = weightNum / (heightNum * heightNum);
    } else if (weightUnit === 'lbs' && heightUnit === 'in') {
      bmi = (weightNum / (heightNum * heightNum)) * 703;
    } else if (weightUnit === 'lbs' && heightUnit === 'ft') {
      const heightInInches = heightNum * 12;
      bmi = (weightNum / (heightInInches * heightInInches)) * 703;
    } else {
      alert('Invalid unit combination');
      return;
    }

    setBmi(bmi.toFixed(1));

    if (bmi < 18.5) {
      setMessage('You are Underweight');
      setImgSrc('Images/underweight.png');
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage('You are a healthy weight');
      setImgSrc('Images/healthy.png');
    } else if (bmi >= 25 && bmi < 29.9) {
      setMessage('You are Overweight');
      setImgSrc('Images/overweight.png');
    }
    else
    {
      setMessage('You are classified as obese!! ');
      setImgSrc('Images/obesity.png');
    }
  }

  function Reload() {
    window.location.reload();
  }

  return (
    <div className='bmi'>
      <div className='bmicontainer'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div className='input-group'>
            <label>Weight</label>
            <div className='input-with-unit'>
              <input
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                type='number'
                min='0'
                step='any'
              />
              <select value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
                <option value='lbs'>lbs</option>
                <option value='kg'>kg</option>
              </select>
            </div>
          </div>
          <div className='input-group'>
            <label>Height</label>
            <div className='input-with-unit'>
              <input
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                type='number'
                min='0'
                step='any'
              />
              <select value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
                <option value='in'>in</option>
                <option value='cm'>cm</option>
                <option value='m'>m</option>
                <option value='ft'>ft</option>
              </select>
            </div>
          </div>
          <div>
            <button className='btn1' type='submit'>
              Submit
            </button>
            <button className='btn1 btn-outline' type='button' onClick={Reload}>
              Reload
            </button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>Status: {message}</p>
        </div>

        <div className='img-container'>
          {imgSrc && <img src={imgSrc} alt='BMI status' />}
        </div>
      </div>
    </div>
  );
}
