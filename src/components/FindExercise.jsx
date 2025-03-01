import React, { useState } from 'react';
import './FindExercise.css';

export default function FindExercises() {
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [exercises, setExercises] = useState([]);
  const [exercisePlan, setExercisePlan] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  });
  const [showFinalSchedule, setShowFinalSchedule] = useState(false);

  const muscleOptions = [
    'Biceps', 'Shoulders', 'Chest', 'Triceps', 'Abs',
    'Calves', 'Glutes', 'Quads', 'Hamstrings',
  ];

  const exerciseData = {
    'Biceps': ['Bent Over Rowing', 'Bent Over Rowing Reverse', 'Biceps Curls With Barbell', 'Biceps Curls With Dumbbell', 'Biceps Curls With SZ-bar', 'Biceps Curl With Cable'],
    'Shoulders': ['Dumbbell Lateral Raise', 'Dumbbell Front Raise', 'Dumbbell Rear Delt Raise', 'Shoulder Press', 'Arnold Press', 'Lateral Raise'],
    'Chest': ['Bench Press', 'Incline Bench Press', 'Decline Bench Press', 'Dumbbell Press', 'Push-ups', 'Chest Fly'],
    'Triceps': ['Tricep Pushdown', 'Overhead Dumbbell Extension', 'Tricep Dips', 'Close Grip Bench Press', 'Skull Crushers', 'Tricep Kickback'],
    'Abs': ['Crunches', 'Leg Raises', 'Russian twists', 'Plank', 'Bicycle crunches', 'Woodchoppers'],
    'Calves': ['Calf Raises', 'Seated Calf Raise', 'Standing Calf Raise', 'Calf Press', 'Donkey Calf Raise', 'Calf Raises on a step'],
    'Glutes': ['Squats', 'Deadlifts', 'Glute Bridges', 'Lunges', 'Leg Press', 'Hip Thrusts'],
    'Quads': ['Squats', 'Leg Press', 'Lunges', 'Leg Extensions', 'Leg Curls', 'Bulgarian Split Squats'],
    'Hamstrings': ['Deadlifts', 'Leg Curls', 'Glute-Ham Raises', 'Romanian Deadlifts', 'Lying Leg Curls', 'Seated Leg Curls'],
  };

  const handleMuscleChange = (event) => {
    const selectedMuscle = event.target.value;
    setSelectedMuscle(selectedMuscle);
    setExercises(exerciseData[selectedMuscle]);
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const handleExerciseSelection = (exercise) => {
    if (selectedDay && selectedMuscle) {
      setExercisePlan((prevPlan) => ({
        ...prevPlan,
        [selectedDay]: [...prevPlan[selectedDay], { name: exercise, repetitions: 0, sets: 0 }]
      }));
    }
  };

  const handleRepetitionsChange = (day, index, value) => {
    setExercisePlan((prevPlan) => {
      const updatedDayPlan = prevPlan[day].map((exercise, i) => 
        i === index ? { ...exercise, repetitions: value } : exercise
      );
      return { ...prevPlan, [day]: updatedDayPlan };
    });
  };

  const handleSetsChange = (day, index, value) => {
    setExercisePlan((prevPlan) => {
      const updatedDayPlan = prevPlan[day].map((exercise, i) => 
        i === index ? { ...exercise, sets: value } : exercise
      );
      return { ...prevPlan, [day]: updatedDayPlan };
    });
  };

  const handleSaveExercise = () => {
    // Implementation for saving the exercise if needed
  };

  const handleRemoveExercise = (day, index) => {
    setExercisePlan((prevPlan) => {
      const updatedDayPlan = prevPlan[day].filter((_, i) => i !== index);
      return { ...prevPlan, [day]: updatedDayPlan };
    });
  };

  const handleFinalSchedule = () => {
    setShowFinalSchedule(true);
  };

  return (
    <div className="exercise_container">
      <h1 className='exh'>Exercise Tracker</h1>
      <div className="days-container">
        {Object.keys(exercisePlan).map((day) => (
          <div key={day} className={`day ${selectedDay === day ? 'selected' : ''}`} onClick={() => handleDayChange(day)}>
            {day}
          </div>
        ))}
      </div>
      <div className="dropdown-container">
        <select value={selectedMuscle} onChange={handleMuscleChange} className='sec'>
          <option value="">Select Muscle</option>
          {muscleOptions.map((muscle, index) => (
            <option key={index} value={muscle}>
              {muscle}
            </option>
          ))}
        </select>
      </div>
      <div className="exercise-list">
        {exercises && (
          <ul>
            {exercises.map((exercise, index) => (
              <li key={index} onClick={() => handleExerciseSelection(exercise)} style={{ padding: 10, margin: 10, border: '1px solid #1e1f72', borderRadius: 5, width: 200, display: 'inline-grid' }}>
                {exercise}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h2>Selected Exercises for {selectedDay}</h2>
        {selectedDay && (
          <table className="exercise-table">
            <thead>
              <tr>
                <th>Exercise</th>
                <th>Repetitions</th>
                <th>Sets</th>
                <th>Update</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {exercisePlan[selectedDay].map((exercise, index) => (
                <tr key={index}>
                  <td>{exercise.name}</td>
                  <td>
                    <input
                      className='ip'
                      type="number"
                      value={exercise.repetitions}
                      onChange={(e) => handleRepetitionsChange(selectedDay, index, e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={exercise.sets}
                      onChange={(e) => handleSetsChange(selectedDay, index, e.target.value)}
                    />
                  </td>
                  <td>
                    <button onClick={handleSaveExercise} className='clkbtn'>Save</button>
                  </td>
                  <td>
                    <button onClick={() => handleRemoveExercise(selectedDay, index)} className='clkbtn'>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <button className="final-schedule-button clkbtn" onClick={handleFinalSchedule} >Final Schedule</button>
      {showFinalSchedule && (
        <div className="final-schedule">
          <h2 className='exh'>Final Schedule</h2>
          <div className="days-container">
            {Object.keys(exercisePlan).map((day) => (
              <div key={day} className="day-schedule">
                <h3 className='exh3'>{day}</h3>
                {exercisePlan[day].map((exercise, index) => (
                  <div key={index} className="exercise-card">
                    <p>{exercise.name}</p>
                    <p>reps: {exercise.repetitions}</p>
                    <p>sets: {exercise.sets}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

