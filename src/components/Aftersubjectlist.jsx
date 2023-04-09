import React from 'react';

const subjects = [
  { name: 'Introduction to Information Technology', year: 1, semester: 1, link: 'https://example.com/intro-it' },
  { name: 'C Programming', year: 1, semester: 1, link: 'https://example.com/c-programming' },
  { name: 'Digital Logic', year: 1, semester: 1, link: 'https://example.com/digital-logic' },
  { name: 'Mathematics I', year: 1, semester: 1, link: 'https://example.com/math-i' },
  { name: 'Physics', year: 1, semester: 1, link: 'https://example.com/physics' },
  { name: 'Discrete Structure', year: 2, semester: 2, link: 'https://example.com/discrete-structure' },
  { name: 'Object-Oriented Programming', year: 2, semester: 2, link: 'https://example.com/oop' },
  { name: 'Microprocessor', year: 2, semester: 2, link: 'https://example.com/microprocessor' },
  { name: 'Mathematics II', year: 2, semester: 2, link: 'https://example.com/math-ii' },
  { name: 'Statistics I', year: 2, semester: 2, link: 'https://example.com/statistics-i' }
];

const Aftersubjectlist = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {subjects.map((subject, index) => (
        <a key={index} href={subject.link} target="_blank" rel="noopener noreferrer" className="border rounded-lg p-4 transition-colors duration-300 ease-in-out hover:bg-gray-100">
          <div className="font-bold text-lg mb-2">{subject.name}</div>
          <div className="text-gray-600">{`Year ${subject.year} / Semester ${subject.semester}`}</div>
        </a>
      ))}
    </div>
  );
};

export default Aftersubjectlist;
