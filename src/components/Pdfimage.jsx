import React from 'react';

function PDFViewer({ url }) {
  return (
    <iframe
      src={url}
      frameBorder="0"
      width="100%"
      style={{ height: '100vh' }}
    />
  );
}

function pdfimage() {
  return (
    <div className="App">
      <PDFViewer url="https://www.africau.edu/images/default/sample.pdf" />
    </div>
  );
}

export default pdfimage;