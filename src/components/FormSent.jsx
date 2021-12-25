import React from 'react';
import check from '../img/cheque.svg';

const FormSent = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src={check} width="100%" height="auto" />
    </div>
  );
};

export default FormSent;