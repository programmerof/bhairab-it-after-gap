import React from 'react'

const NotesDiv = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Notes</h2>
      <ul className="list-disc list-inside">
        <li>Introduction to BSc CSIT</li>
        <li>Programming with C</li>
        <li>Data Structures and Algorithms</li>
      </ul>
      <h2 className="text-2xl font-bold my-4">Questions</h2>
      <ol className="list-decimal list-inside">
        <li>What is the eligibility criteria for BSc CSIT?</li>
        <li>What are the important subjects in BSc CSIT?</li>
        <li>What is the fee structure for BSc CSIT in Nepal?</li>
      </ol>
      <h2 className="text-2xl font-bold my-4">Syllabus</h2>
      <ul className="list-disc list-inside">
        <li>Introduction to Information Technology</li>
        <li>Mathematics I</li>
        <li>Physics</li>
        <li>Computer Organization and Architecture</li>
        <li>Object-Oriented Programming with Java</li>
        <li>Database Management System</li>
        <li>Computer Networks</li>
        <li>Web Technologies</li>
      </ul>
    </div>
  );
};

export default NotesDiv
