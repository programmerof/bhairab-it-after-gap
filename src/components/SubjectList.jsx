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
  { name: 'Statistics I', year: 2, semester: 2, link: 'https://example.com/stats-i' },
];

const SubjectList = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold text-center mb-8">Bsc CSIT Subject Notes</h1>
      <table className="table-auto border rounded-lg overflow-hidden shadow-lg mx-auto">
        <thead className="bg-gray-200 uppercase text-sm text-gray-600 font-bold">
          <tr>
            <th className="py-3 px-4 text-left">Subject Name</th>
            <th className="py-3 px-4 text-left">Year</th>
            <th className="py-3 px-4 text-left">Semester</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-medium">
          {subjects.map((subject, index) => (
            <tr key={index} className="border-t">
              <td className="py-3 px-4">
                <a href={subject.link}>{subject.name}</a>
              </td>
              <td className="py-3 px-4">{subject.year}</td>
              <td className="py-3 px-4">{subject.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectList;
