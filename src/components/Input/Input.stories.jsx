import React from 'react';
import Input from './Input';

// default export
export default {
  title: 'form/Input',
  component: Input,
}

// named exports
export const Small = () => <Input size='small' placeholder='small' />
export const Medium = () => <Input size='medium' placeholder='medium' />
export const Large = () => <Input size='large' placeholder='large' />
