import React, { useState } from 'react';
import './App.css';
import Gallery from './Gallery';
import AddImage from './AddImage';
import DarkModeToggle from './DarkModeToggle'; 
import './DarkModeToggle.css';


function App() {
  const [images, setImages] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleAdd = (imageUrl) => {
    setImages([...images, { id: Date.now(), imageUrl, dateAdded: new Date(), name: `Image ${images.length + 1}` }]);
  };

  const handleRemove = (id) => {
    setImages(images.filter((img) => img.id !== id));
  };

  const toggleDarkMode = (mode) => {
    setDarkMode(mode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <DarkModeToggle toggleDarkMode={toggleDarkMode} />
      <h1>Snapshot Gallery</h1>
      <AddImage handleAdd={handleAdd} />
      <Gallery images={images} handleRemove={handleRemove} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
