import React, { useState, useEffect } from 'react';
import './App.css';
import ImageCard from './_components/ImageCard';
import { Container } from '@material-ui/core';
import HeaderBar from './_components/HeaderBar';
import Footer from './_components/Footer';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const getImage = async () => {
    let data;
    try {
      const resp = await (await fetch("https://dog.ceo/api/breeds/image/random")).json()
      console.log(resp)
      data = resp;
    } catch (err) {
      console.error(err);
    } finally {
      setDogImage(data.message)
    }

  }
  useEffect(() => {
    if (!dogImage) {
      getImage();
    }
  }, [dogImage])
  return (
    <div className="App">
      <HeaderBar />
      <Container>
        <ImageCard
          image={dogImage}
          reset={() => setDogImage(null)}
        />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
