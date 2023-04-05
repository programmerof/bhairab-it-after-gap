import React from 'react';

const NotesDiv = () => {
  const introductionToCsit = [
    'Introduction to BSc CSIT',
    'Eligibility criteria for BSc CSIT',
    'Importance of BSc CSIT'
  ];
  const programming = [
    'Programming with C',
    'Programming with Java',
    'Programming with Python'
  ];
  const dataStructures = [
    'Introduction to Data Structures',
    'Stacks and Queues',
    'Trees and Graphs'
  ];
  const syllabus = [
    'Introduction to Information Technology',
    'Mathematics I',
    'Physics',
    'Computer Organization and Architecture',
    'Object-Oriented Programming with Java',
    'Database Management System',
    'Computer Networks',
    'Web Technologies',
    'Software Engineering'
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6  mx-auto">
      <h2 className="text-2xl font-bold mb-4">Notes</h2>
      <ul className="list-disc list-inside">
        {introductionToCsit.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold my-4">Questions</h2>
      <ol className="list-decimal list-inside">
        <li>What is the eligibility criteria for BSc CSIT?</li>
        <li>What are the important subjects in BSc CSIT?</li>
        <li>What is the fee structure for BSc CSIT in Nepal?</li>
      </ol>
      <h2 className="text-2xl font-bold my-4">Syllabus</h2>
      <ul className="list-disc list-inside">
        {syllabus.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold my-4">Programming</h2>
      <ul className="list-disc list-inside">
        {programming.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold my-4">Data Structures and Algorithms</h2>
      <ul className="list-disc list-inside">
        {dataStructures.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotesDiv;
