import React, { useState } from 'react';

const useForm = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = event => {
    setValue(oldValue => ({
      ...oldValue,
      [event?.target?.name]: event?.target?.value,
    }));
  };

  const handleSubmit = afterPreventDefault => {
    return event => {
      event.preventDefault();
      //validations
      afterPreventDefault(event);
    };
  };

  return [value, handleChange, handleSubmit];
};

export default useForm;
