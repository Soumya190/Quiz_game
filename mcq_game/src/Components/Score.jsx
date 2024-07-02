import React from 'react';

const Score = ({ score, total }) => {
  return (
    <div>
      <h2>Your Score</h2>
      <p>{score} out of {total}</p>
    </div>
  );
};

export default Score;