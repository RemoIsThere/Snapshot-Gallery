import React from 'react';

const RemoveImage = ({ image, handleRemove }) => {
  return (
    <div className="remove-image">
      <button onClick={() => handleRemove(image)}>Remove</button>
    </div>
  );
};

export default RemoveImage;
