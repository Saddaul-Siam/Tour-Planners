import React from 'react';

const Tour = ({ service }) => {
  const description = service.description;
  const details = description.slice(0, 200)
  return (
    <div>
      <p>{details}</p>
    </div>
  );
};

export default Tour;