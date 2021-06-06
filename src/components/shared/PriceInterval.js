import React from 'react';
import T from 'prop-types';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

function PriceInterval({ min, max, name, onChange, ...props }) {
  const handleChange = ([minValue, maxValue]) => {
    onChange({ target: { name, value: [minValue || min, maxValue || max] } });
  };

  // function log(value) {
  //   console.log('PriceInterval.log, value: ', value);
  // }

  // return <Range onChange={handleChange} min={min} max={max} {...props} />;
  return (
    <Range
      allowCross={false}
      draggableTrack
      onChange={handleChange}
      min={min}
      max={max}
      {...props}
    />
  );
}

PriceInterval.propTypes = {
  name: T.string.isRequired,
  onChange: T.func.isRequired,
  min: T.number.isRequired,
  max: T.number.isRequired,
};

export default PriceInterval;
