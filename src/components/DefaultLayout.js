import React from 'react';

const DefaultLayout = ({ children }) => {
  return (
    <div className='bg-default'>
      <main>{children}</main>
    </div>
  );
};

export default DefaultLayout;
