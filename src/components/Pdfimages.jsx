import React, { useState, useEffect } from 'react';
import pdfjsLib from 'pdfjs-dist';

async function pdfToImages(pdfUrl) {
  const doc = await pdfjsLib.getDocument(pdfUrl).promise;
  const pages = [];

  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const viewport = page.getViewport({ scale: 1 });
    const canvas = document.createElement('canvas');
    const canvasContext = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext,
      viewport,
    };

    await page.render(renderContext).promise;

    const img = canvas.toDataURL();
    pages.push(img);
  }

  return pages;
}

function MyPdfViewer() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    async function loadPdf() {
      try {
        const pdfPages = await pdfToImages('/public/2072 (Object oriented programming).pdf');
        setPages(pdfPages);
      } catch (error) {
        console.error('Failed to load PDF:', error);
      }
    }

    loadPdf();
  }, []);

  return (
    <>
      {pages.map((page, index) => (
        <img src={page} key={index} />
      ))}
    </>
  );
}

export default MyPdfViewer;
