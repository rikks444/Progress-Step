// src/components/stories/ProgressStep.stories.js

import React from 'react';
import ProgressStep from '../ProgressStep';

export default {
  title: 'Progress Step',
  component: ProgressStep,
};

export const Default = () => <ProgressStep label="Step 1" />;
export const Active = () => <ProgressStep label="Step 2" active />;
export const Completed = () => <ProgressStep label="Step 3" completed />;
export const Clickable = () => <ProgressStep label="Step 4" onClick={() => alert('Step clicked')} />;

export const WithControls = (args) => <ProgressStep {...args} />;

WithControls.args = {
  label: 'Step 5',
  active: false,
  completed: false,
  onClick: () => alert('Step clicked'),
};
