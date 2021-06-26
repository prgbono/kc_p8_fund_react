import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import RadioGroup from './../shared/RadioGroup';
import { saleFilter } from './../Adverts/filters';
import { Button } from 'antd';
import PriceInterval from './../shared/PriceInterval';
import SelectTags from './../shared/SelectTags';
import T from 'prop-types';
import { advert } from './propTypes';

const FiltersForm = ({ initialFilters, onFilter, prices }) => {
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
  const min = 0;
  const max = 25000;

  const inputNameFilterStyle = {
    height: '32px',
    padding: '4px 15px',
    fontSize: '14px',
    borderRadius: '2px',
    color: 'rgba(0,0,0,0.85)',
    background: '#fff',
    borderColor: '#d9d9d9',
  };

  const filterArea = {
    width: '100%',
    background: '#001529',
  };

  console.log('FiltersForm, filters: ', filters);

  return (
    <form onSubmit={handleSubmit(onFilter)} style={filterArea}>
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
        min={min}
        max={max}
        value={price}
        name='price'
        onChange={handleChange}
        style={{ width: '50%', left:'25%', marginBottom: '3px' }}
        marks={{ [min]: min, [max]: max }}
      />
    </form>
  );
};

const filtersProp = T.shape({
  ...advert,
  sale: T.oneOf(Object.keys(saleFilter)).isRequired,
  price: T.arrayOf(T.number.isRequired).isRequired,
});

FiltersForm.propTypes = {
  initialFilters: filtersProp.isRequired,
  defaultFilters: filtersProp.isRequired,
  onFilter: T.func.isRequired,
  prices: T.arrayOf(T.number.isRequired).isRequired,
};

export default FiltersForm;
