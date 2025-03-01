import React, { useState } from 'react';
import axios from 'axios';
import './CalorieCalculator.css';


export default function CalorieCalculator() {
    const [foodItem, setFoodItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [measure, setMeasure] = useState('gram');
  const [nutritionInfo, setNutritionInfo] = useState({});
  const [error, setError] = useState('');
  const [showInputs, setShowInputs] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const [mealData, setMealData] = useState({
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Snacks: []
  });

  const fetchNutritionInfo = async (meal) => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/api/nutrition-data?app_id=${import.meta.env.VITE_EDAMAM_APP_ID}&app_key=${import.meta.env.VITE_EDAMAM_APP_KEY}&ingr=${quantity}%20${measure}%20${foodItem}`
      );
      const newMealData = {
        foodItem,
        carbs: Math.round(response.data.totalNutrients.CHOCDF.quantity),
        protein: Math.round(response.data.totalNutrients.PROCNT.quantity),
        fat: Math.round(response.data.totalNutrients.FAT.quantity),
        calories: Math.round(response.data.calories)
      };
      if (editIndex !== null) {
        setMealData((prev) => {
          const updatedMealData = [...prev[meal]];
          updatedMealData[editIndex] = newMealData;
          return { ...prev, [meal]: updatedMealData };
        });
        setEditIndex(null);
      } else {
        setMealData((prev) => ({
          ...prev,
          [meal]: [...prev[meal], newMealData]
        }));
      }
      setShowInputs((prev) => ({ ...prev, [meal]: false }));
      setFoodItem('');
      setQuantity(1);
      setMeasure('gram');
      setError('');
    } catch (err) {
      console.error(err);
      setError('Error fetching nutrition information. Please try again.');
      setNutritionInfo(null);
    }
  };

  const handleAddFoodClick = (meal) => {
    setShowInputs((prev) => ({ ...prev, [meal]: true }));
  };

  const handleEdit = (meal, index) => {
    setEditIndex(index);
    setFoodItem(mealData[meal][index].foodItem);
    setQuantity(mealData[meal][index].quantity || 1);
    setMeasure(mealData[meal][index].measure || 'gram');
    setShowInputs((prev) => ({ ...prev, [meal]: true }));
  };

  const handleDelete = (meal, index) => {
    setMealData((prev) => {
      const updatedMealData = [...prev[meal]];
      updatedMealData.splice(index, 1);
      return { ...prev, [meal]: updatedMealData };
    });
  };
  const calculateTotals = () => {
    return Object.values(mealData).flat().reduce(
      (totals, item) => {
        totals.calories += item.calories;
        totals.carbs += item.carbs;
        totals.protein += item.protein;
        totals.fat += item.fat;
        return totals;
      },
      { calories: 0, carbs: 0, protein: 0, fat: 0 }
    );
  };

  const totals = calculateTotals();
  return (
    <div className="app">
    <h1 className='headingh1'>Calorie Counter</h1>

    {['Breakfast', 'Lunch','Snacks', 'Dinner'].map((meal) => (
      <div className="meal-section" key={meal}>
        <div className="meal-header">
          <h2>{meal}</h2>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Food Item</th>
              <th>Carbs</th>
              <th>Protein</th>
              <th>Fat</th>
              <th>Calories</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mealData[meal].map((data, index) => (
              <tr key={index}>
                <td>{data.foodItem}</td>
                <td>{data.carbs}g</td>
                <td>{data.protein}g</td>
                <td>{data.fat}g</td>
                <td>{data.calories}</td>
                <td>
                  <div className="button-container">
                    <button className="edit-button" onClick={() => handleEdit(meal, index)}>Edit</button>
                    <button className="delete-button" onClick={() => handleDelete(meal, index)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showInputs[meal] ? (
          <div className="food-inputs">
            <div className="input-row">
              <input
                type="text"
                value={foodItem}
                onChange={(e) => setFoodItem(e.target.value)}
                placeholder="Enter food item"
              />
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                min="1"
              />
              <select
                value={measure}
                onChange={(e) => setMeasure(e.target.value)}
              >
                <option value="gram">Gram</option>
                <option value="piece">Piece</option>
                <option value="liter">Liter</option>
                <option value="spoon">Spoon</option>
              </select>
            </div>
            <button onClick={() => fetchNutritionInfo(meal)}>
              {editIndex !== null ? 'Update Nutrition Info' : 'Get Nutrition Info'}
            </button>
          </div>
        ) : (
          <div className="add-food-item" onClick={() => handleAddFoodClick(meal)}>
            <span className="plus-sign">+</span> Add Food Item
          </div>
        )}
        {error && <p className="error">{error}</p>}
      </div>
    ))}
    <div className="summary">
      <h2>Daily Summary</h2>
      <p className='sump'><strong>Total Calories:</strong> {totals.calories} kcal</p>
      <p className='sump'><strong>Total Carbs:</strong> {totals.carbs} g</p>
      <p className='sump'><strong>Total Protein:</strong> {totals.protein} g</p>
      <p className='sump'><strong>Total Fat:</strong> {totals.fat} g</p>
    </div>
  </div>
  )
}
