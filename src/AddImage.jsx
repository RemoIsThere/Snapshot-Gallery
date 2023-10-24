import React, { useState } from 'react';
import ImageUploadValidation from './ImageUploadValidation';
import LoadingState from './LoadingState';

const AddImage = ({ handleAdd }) => {
  const [loading, setLoading] = useState(false);

  const handleAddImage = (imageUrl) => {
    setLoading(true);

    // Simulate a delay for the upload process
    setTimeout(() => {
      handleAdd(imageUrl);
      setLoading(false);
    }, 2000); // 2 seconds delay
  };

  return (
    <div>
      {loading ? (
        <LoadingState />
      ) : (
        <ImageUploadValidation handleAdd={handleAddImage} />
      )}
    </div>
  );
};

export default AddImage;
