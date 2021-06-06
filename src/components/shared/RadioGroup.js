import T from 'prop-types';

const radioStyle = {
  color: '#fff',
  margin: '0.5em',
};

function RadioGroup({ options, value, ...props }) {
  return (
    <>
      {options.map(({ value: optionValue, label }) => (
        <label style={radioStyle} key={optionValue}>
          <input
            type='radio'
            value={optionValue}
            checked={optionValue === value}
            {...props}
          />
          {label}
        </label>
      ))}
    </>
  );
}

RadioGroup.propTypes = {
  options: T.arrayOf(
    T.shape({
      value: T.string.isRequired,
      label: T.node.isRequired,
    }).isRequired,
  ).isRequired,
  value: T.string.isRequired,
};

export default RadioGroup;
