import React, { useState, useEffect } from 'react';
import './App.css';
import ImageCard from './_components/ImageCard';
import { Container } from '@material-ui/core';

function App() {
  const [dogImage, setDogImage] = useState(null);
  useEffect(() => {
    if (!dogImage) {
      fetch("https://dog.ceo/api/breed/mountain/bernese/images/random")
        .then(resp => {
          console.log(resp);
          return resp.json();
        })
        .then(data => {
          console.log(data);
          return setDogImage(data.message);
        })
    }
  })
  const getNewImage = () => setDogImage(null);
  return (
    console.log(dogImage),
    <div className="App">
      <Container>
        <ImageCard image={dogImage} reset={getNewImage} />
      </Container>
    </div>
  );
}

export default App;
