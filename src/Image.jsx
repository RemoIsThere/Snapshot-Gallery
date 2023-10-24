import React from 'react';

const Image = ({ image, handleRemove }) => {
  return (
    <div className="image">
      <button className="remove-button" onClick={() => handleRemove(image)}>
        Remove
      </button>
      <img src={image} alt="Snapshot" />
    </div>
  );
};

export default Image;

