// src/ExerciseDetail.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ExerciseDetail = () => {
  const location = useLocation();
  const { exercise } = location.state; // Access passed exercise data
  const [gifUrl, setGifUrl] = useState('');
  const API_KEY = 'YOUR_GIPHY_API_KEY'; // Replace with your GIPHY API key

  useEffect(() => {
    const fetchGif = async () => {
      try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${exercise.name}&limit=1`);
        const data = await response.json();
        if (data.data.length > 0) {
          setGifUrl(data.data[0].images.fixed_height.url);
        }
      } catch (error) {
        console.error('Error fetching GIF:', error);
      }
    };

    fetchGif();
  }, [exercise.name]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>{exercise.name} Exercise</h2>
      <p>{exercise.description}</p>
      {gifUrl ? <img src={gifUrl} alt={`${exercise.name} GIF`} /> : <p>Loading GIF...</p>}
    </div>
  );
};

export default ExerciseDetail;
