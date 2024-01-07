import React from 'react';

const Padding = ({ top = 0.2, right = 0.2, bottom = 0.2, left = 0.2, children }) => {
  const paddingStyle = {
    paddingTop: `${top}em`,
    paddingRight: `${right}em`,
    paddingBottom: `${bottom}em`,
      paddingLeft: `${left}em`,
  };

  return <div style={paddingStyle}>{children}</div>;
};

export default Padding;
