import React, { useState } from 'react';

const ImageUploadValidation = ({ handleAdd }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Check if the selected file is an image
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(URL.createObjectURL(selectedFile));
      setError('');
    } else {
      setFile(null);
      setError('Please select a valid image file.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      handleAdd(file);
    }
  };

  return (
    <div className="add-image">
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="form-control-file"
        />
        <button type="submit" className="btn btn-primary mt-2">
          Add Image
        </button>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default ImageUploadValidation;



