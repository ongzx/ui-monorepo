import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'components/Checkbox',
};

export const Normal = () => <Checkbox />;

export const Checked = () => <Checkbox checked />;

export const Disabled = () => <Checkbox disabled />;

export const CheckedDisabled = () => <Checkbox checked disabled />;

export const Children = () => <Checkbox checked>I confirm</Checkbox>;

export const ChildrenDisabled = () => (
  <Checkbox checked disabled>
    I confirm
  </Checkbox>
);
