// src/components/ProgressStep.js

import React from 'react';
import PropTypes from 'prop-types';

const ProgressStep = ({ label, active, completed, onClick }) => {
  const stepClassName = `progress-step ${active ? 'active' : ''} ${
    completed ? 'completed' : ''
  }`;

  return (
    <div className={stepClassName} onClick={onClick}>
      {label}
    </div>
  );
};

ProgressStep.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  completed: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ProgressStep;
