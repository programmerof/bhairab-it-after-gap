import React from "react";

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`image ${index}`} />
        </div>
      ))}
    </div>
  );
};

const folderPath = "../public/physics/Physics (2074)";
const imageName = "Physics (2074)-";

const imagePaths = [];
for (let i = 1; i <= 10; i++) {
  const imagePath = `${folderPath}/${imageName}${i < 10 ? "0" + i : i}.jpg`;
  imagePaths.push(imagePath);
}

const App = () => {
  return (
    <div className="App">
      <ImageGallery images={imagePaths} />
    </div>
  );
};

export default App;
