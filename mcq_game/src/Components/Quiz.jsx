import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';

const quizData = [
  {
    question: 'What is the capital of India?',
    options: ['Maharashtra', 'New Delhi', 'Uttar Pradesh ', 'Madhya Pradesh'],
    answer: 'New Delhi'
  },
  {
    question: 'What is 5 + 2?',
    options: ['3', '7', '5', '6'],
    answer: '7'
  },
  {
    question: 'What is the color of the sky?',
    options: ['Blue', 'Green', 'Red', 'Yellow'],
    answer: 'Blue'
  }
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizData[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <Score score={score} total={quizData.length} />
      ) : (
        <Question
          question={quizData[currentQuestionIndex].question}
          options={quizData[currentQuestionIndex].options}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;