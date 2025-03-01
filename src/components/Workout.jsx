
import React, { useState } from 'react';
import './Workout.css'; // Import the external CSS

const Workout = () => {
  const [selectedExercise, setSelectedExercise] = useState(''); // State to hold the selected exercise type

  const exercises = [
    { name: "Back", image: "Images/back.jpg", description: "Expert advised perfect exercise for your back.", type: "back" },
    { name: "Cardio", image: "Images/cardio copy.jpg", description: "Expert advised perfect exercise for your cardio.", type: "cardio" },
    { name: "Chest", image: "Images/chest.jpg", description: "Expert advised perfect exercise for your chest.", type: "chest" },
    { name: "Legs", image: "Images/leg.jpg", description: "Expert advised perfect exercise for your legs.", type: "legs" },
    { name: "Shoulders", image: "Images/shoulder.png", description: "Expert advised perfect exercise for your shoulders.", type: "shoulders" },
    { name: "Arms", image: "Images/arms.webp", description: "Expert advised perfect exercise for your arms.", type: "arms" },
    { name: "Abs", image: "Images/abs.webp", description: "Expert advised perfect exercise for your abs.", type: "abs" },
    { name: "Stretching", image: "Images/streching.jpg", description: "Expert advised perfect exercise for flexibility.", type: "stretching" },
    { name: "Yoga", image: "Images/ypga.jpg", description: "Expert advised perfect exercise for your mind and body.", type: "yoga" }
  ];

  // Handle the exercise selection
  const handleExerciseSelect = (event) => {
    setSelectedExercise(event.target.value);
  };

  // Filter exercises based on the selected type
  const filteredExercises = selectedExercise 
    ? exercises.filter(exercise => exercise.type === selectedExercise)
    : exercises; // Show all exercises if no selection is made

  return (
    <div className="container">
      <h2 className="header">Please choose type of exercise</h2>
      <div className="select-container">
        <select onChange={handleExerciseSelect}>
          <option value="">All</option> {/* Option to reset the filter and show all */}
          <option value="back">Back</option>
          <option value="cardio">Cardio</option>
          <option value="chest">Chest</option>
          <option value="legs">Legs</option>
          <option value="shoulders">Shoulders</option>
          <option value="arms">Arms</option>
          <option value="abs">Abs</option>
          <option value="stretching">Stretching</option>
          <option value="yoga">Yoga</option>
        </select>
        <button onClick={() => setSelectedExercise('')} className='reset'>Reset</button> {/* Button to reset the filter */}
      </div>
      <hr />
      <div className="exercise-grid">
        {filteredExercises.map((exercise, index) => (
          <div key={index} className="workout-card workout-card-workout">
            <img src={exercise.image} alt={exercise.name} />
            <div className="workout-card-content">
              <h3>{exercise.name}</h3>
              <p>{exercise.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workout;
