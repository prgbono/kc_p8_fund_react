import React, { useState } from 'react';

const useForm = initialValue => {
  const [value, setValue] = useState(initialValue);

  const getValueByType = {
    checkbox: ({ checked }) => checked,
    number: ({ value }) => Number(value),
    'select-multiple': ({ selectedOptions }) =>
      [...selectedOptions].map(({ value }) => value),
    file: ({ files }) => files[0] || null,
  };

  const defaultGetValue = ({ value }) => value;

  const handleChange = ev => {
    const valueGetter = getValueByType[ev.target.type] || defaultGetValue;
    updateFormValue(ev.target.name, valueGetter(ev.target));
    console.log('useForm, handleChange, event: ',ev);
    
  };

  const updateFormValue = (name, value) => {
    setValue(currentFormValue => ({
      ...currentFormValue,
      [name]: value,
    }));
  };

  const handleSubmit = onSubmit => ev => {
    ev.preventDefault();
    onSubmit(value);
  };

  return [value, handleChange, handleSubmit];
};

export default useForm;
