import React, { useState } from 'react';
import './DarkModeToggle.css'; // Import the updated CSS file

const DarkModeToggle = ({ toggleDarkMode }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
    toggleDarkMode(!darkMode);
  };

  return (
    <div className={`dark-mode-toggle ${darkMode ? 'dark-mode' : ''}`} onClick={handleClick}>
      Change Mode
    </div>
  );
};

export default DarkModeToggle;

