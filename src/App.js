import React, { useState, useEffect } from 'react';
import './App.css';
import ImageCard from './_components/ImageCard';
import { Container} from '@material-ui/core';
import HeaderBar from './_components/HeaderBar';
import Footer from './_components/Footer';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const getImage = () =>{
    setLoading(true)
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => {
          // console.log(resp);
          return resp.json();
        })
        .then((data) => {
          // console.log(data);
          setDogImage(data.message) 
          return setLoading(false);
        })
        
  }
  useEffect(() => {
    if(!dogImage) {
      getImage();
    }
  }, [dogImage])
  return (
    <div className="App">
      <HeaderBar />
      <Container>
        <ImageCard loading = {loading} image={dogImage} reset={getImage} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
