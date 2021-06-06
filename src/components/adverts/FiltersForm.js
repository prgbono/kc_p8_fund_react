import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import RadioGroup from './../shared/RadioGroup';
import { saleFilter } from './../Adverts/filters';
import { Button } from 'antd';
import PriceInterval from './../shared/PriceInterval';
import SelectTags from './../shared/SelectTags';

const FiltersForm = ({ initialFilters, onFilter }) => {
  const [filters, handleChange, handleSubmit] = useForm(initialFilters);

  //TODO: focus on Search input
  // const inputRef = React.useRef(null);
  // React.useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  //TODO: Reset filter form
  // const handleResetClick = () => {
  //   setFormValue(defaultFilters);
  //   onFilter(defaultFilters);
  // };

  const { name, sale, price, tags } = filters;

  const inputNameFilterStyle = {
    height: '32px',
    padding: '4px 15px',
    fontSize: '14px',
    borderRadius: '2px',
    color: 'rgba(0,0,0,0.85)',
    background: '#fff',
    borderColor: '#d9d9d9',
  };

  return (
    <form onSubmit={handleSubmit(onFilter)}>
      <input
        name='name'
        value={name}
        onChange={handleChange}
        style={inputNameFilterStyle}
        placeholder='Search by name...'
      />
      <RadioGroup
        options={Object.values(saleFilter)}
        name='sale'
        value={sale}
        onChange={handleChange}
      />
      <SelectTags multiple name='tags' value={tags} onChange={handleChange} />
      <Button type='submit'>Filter</Button>
      <PriceInterval
        min={0}
        max={1000}
        value={price}
        name='price'
        onChange={handleChange}
        style={{ width: 400 }}
        marks={(100, 500)}
      />
    </form>
  );
};

//TODO: FiltersForm.propTypes = {}

export default FiltersForm;
