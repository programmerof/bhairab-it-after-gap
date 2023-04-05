import React, { Component } from 'react';

const getQuestionsData = () => [
  {
    id: 1,
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.'
  },
  {
    id: 2,
    question: 'What is JSX?',
    answer: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.'
  }
];

class QAComponent extends Component {
  render() {
    const questionsData = getQuestionsData();

    return (
      <div>
        {questionsData.map(item => (
          <div key={item.id}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default QAComponent;
