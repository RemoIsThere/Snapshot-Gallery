import React, { useEffect, useCallback, useState } from "react";
import Image from "./Image";
import "./Gallery.css";

const Gallery = ({ images, handleRemove, handleAdd }) => {
  const [sortCriteria, setSortCriteria] = useState("default");
  const [sortedImages, setSortedImages] = useState([...images]);

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();

      const droppedFile = e.dataTransfer.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        handleAdd(event.target.result);
      };

      reader.readAsDataURL(droppedFile);
    },
    [handleAdd]
  );

  useEffect(() => {
    const adjustImageDimensions = () => {
      const images = document.querySelectorAll(".image img");
      let maxHeight = 0;

      images.forEach((image) => {
        const aspectRatio = image.naturalWidth / image.naturalHeight;
        const newHeight = aspectRatio * 150;

        if (newHeight > maxHeight) {
          maxHeight = newHeight;
        }
      });

      images.forEach((image) => {
        const aspectRatio = image.naturalWidth / image.naturalHeight;
        if (aspectRatio === 1) {
          image.style.height = "auto";
          image.style.width = "auto";
        } else {
          image.style.height = `${maxHeight}px`;
          image.style.width = `${maxHeight / aspectRatio}px`;
        }
      });
    };

    adjustImageDimensions();
    window.addEventListener("resize", adjustImageDimensions);

    const gallery = document.querySelector(".gallery");

    gallery.addEventListener("dragover", handleDragOver);
    gallery.addEventListener("drop", handleDrop);

    return () => {
      window.removeEventListener("resize", adjustImageDimensions);

      gallery.removeEventListener("dragover", handleDragOver);
      gallery.removeEventListener("drop", handleDrop);
    };
  }, [handleDrop]);

  useEffect(() => {
    const sortedImages = [...images].map((image) => ({ ...image }));

    switch (sortCriteria) {
      case "default":
        // No sorting required
        break;
      case "date":
        sortedImages.sort((a, b) => {
          return new Date(b.dateAdded) - new Date(a.dateAdded);
        });
        break;
      case "name":
        sortedImages.sort((a, b) => {
          return (a.name || "").localeCompare(b.name || "");
        });
        break;
      default:
        break;
    }

    setSortedImages([...sortedImages]);
  }, [images, sortCriteria]);

  return (
    <div className="gallery">
      <div className="sort-buttons">
        <button onClick={() => handleSort("default")}>Default</button>
        <button onClick={() => handleSort("date")}>By Date</button>
        <button onClick={() => handleSort("name")}>By Name</button>
      </div>
      {sortedImages.map((image, index) => (
        <Image
          key={image.id}
          image={image.imageUrl}
          
          handleRemove={() => handleRemove(image.id)}
        />
      ))}
    </div>
  );
};

export default Gallery;
