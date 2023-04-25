import React from 'react';
import Button from './Button';

// default export
export default {
  title: 'form/Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { submit: 'cyan', value: '#0ff' },
        { next: 'blue', value: '#00f' },
        {ok: 'green',value: '#0f0' },
        { cancel: 'red', value: '#f00' },
      ],
    },
  },
};

// named exports
export const Submit = () => <Button variant='submit'>Submit</Button>
export const Next = () => <Button variant='next'>Next</Button>
export const OK = () => <Button variant='ok'>OK</Button>
export const Cancel = () => <Button variant='cancel'>Cancel</Button>



