import React from 'react';
import Radio from './Radio';

export default {
  title: 'components/Radio',
};

export const Normal = () => <Radio />;

export const Checked = () => <Radio checked />;

export const Disabled = () => <Radio disabled />;

export const CheckedDisabled = () => <Radio checked disabled />;

export const Children = () => <Radio checked>I confirm</Radio>;

export const ChildrenDisabled = () => (
  <Radio checked disabled>
    I confirm
  </Radio>
);
