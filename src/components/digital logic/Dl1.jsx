import React from 'react';

const FullHeightImageGallery = ({ images }) => {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {images.map((image, index) => (
        <img key={index} src={image} style={{ height: '100%', maxWidth: '100%', objectFit: 'cover', margin: '0 10px' }} />
      ))}
    </div>
  );
}

const App = () => {
  const images = [
    'public/digital logic/Dl1/Digital Logic (2074)_page-0001.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0002.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0003.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0004.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0005.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0006.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0007.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0008.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0009.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0010.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0011.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0012.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0013.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0014.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0015.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0016.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0017.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0018.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0019.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0020.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0021.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0022.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0023.jpg',
'public/digital logic/Dl1/Digital Logic (2074)_page-0024.jpg'

  ];

  return (
    <div>
      <h1>My Full Height Image Gallery</h1>
      <FullHeightImageGallery images={images} />
    </div>
  );
}

export default App;
