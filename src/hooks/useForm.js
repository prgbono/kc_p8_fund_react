import React, { useState } from 'react';

const useForm = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = event => {
    // TODO: Refactor! Not reusable in this way!! Use destructuring on event object...
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
    } else if (event?.target?.name === 'photo') {
      setValue(oldValue => ({
        ...oldValue,
        photo: event?.target?.files[0] || null,
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
