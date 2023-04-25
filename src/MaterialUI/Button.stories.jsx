import React from 'react';
import Button from '@mui/material/Button';

export default {
    title: 'MaterialUI/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
    },
    
  }

const  Template = args => <Button {...args} />
export const Sucess = Template.bind({});
Sucess.args = {
  children:'sucess',
  variant:'contained',
  color:'success'

};
Sucess.decorators = [
  (Button) => (
    <div style={{ margin: '15em' }}>
      <Button />
    </div>
  ),
];

export const Error = Template.bind({})
Error.decorators = [
  (Button) => (
    <div style={{ margin: '15em' }}>
      <Button />
    </div>
  ),
];
  Error.args = {
    children: 'error',
    variant:'contained',
    color:'error'
}





// //named export with parameters 
// export const Success = () => 
// <Button variant="contained" color='success'>
// Success
// </Button>
// export const Error = () =>
// <Button variant="contained" color='error'>
//  Error 
// </Button>