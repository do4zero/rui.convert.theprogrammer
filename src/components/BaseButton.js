import React from 'react';

const BaseButton = ({
  children,
  background = '#84EC8E',
  color = '#03090E',
  transform = 'uppercase',
  padding = '10px 20px',
  className = '',
}) => {
  return (
    <div
      className={`btn base-button ${className}`}
      style={{
        background,
        color,
        padding,
        borderRadius: '0',
        textTransform: transform,
        fontSize: '1rem',
      }}
    >
      {children}
    </div>
  );
};

export default BaseButton;
