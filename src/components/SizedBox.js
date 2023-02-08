import React from 'react';

const SizedBox = ({
  display = 'block',
  height = '0px',
  width = '100%',
}) => {
  return (
    <div
      style={{
        display,
        height,
        width,
      }}
    ></div>
  );
};

export default SizedBox;
