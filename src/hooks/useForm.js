import React, { useState } from 'react';

const useForm = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = event => {
    // TODO: Refactor!
    if (event.length) {
      setValue(oldValue => ({
        ...oldValue,
        tags: event,
      }));
    } else if (event?.target?.name === 'sale') {
      setValue(oldValue => ({
        ...oldValue,
        sale: event?.target?.checked,
      }));
    } else {
      setValue(oldValue => ({
        ...oldValue,
        [event?.target?.name]: event?.target?.value,
      }));
    }
  };

  const handleSubmit = afterPreventDefault => {
    return event => {
      event.preventDefault();
      afterPreventDefault(event);
    };
  };

  return [value, handleChange, handleSubmit];
};

export default useForm;
