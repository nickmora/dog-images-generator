import React, { useState, useEffect } from 'react';
import './App.css';
import ImageCard from './_components/ImageCard';
import { Container} from '@material-ui/core';
import mainStyle from "./mainStyle.js";
import HeaderBar from './_components/HeaderBar';
import Footer from './_components/Footer';

function App() {
  const [dogImage, setDogImage] = useState(null);
  useEffect(() => {
    if (!dogImage) {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => {
          console.log(resp);
          return resp.json();
        })
        .then(data => {
          console.log(data);
          return setDogImage(data.message);
        })
    }
  }, [dogImage])
  const getNewImage = () => setDogImage(null);
  return (
    <div className="App">
      <HeaderBar />
      <Container>
        <ImageCard image={dogImage} reset={getNewImage} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
