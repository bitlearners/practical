import React from 'react';

const Icon = ({ name, color }) => {
  return <i className={`icon-${name}`} style={{ color }}></i>;
};

export default Icon;
