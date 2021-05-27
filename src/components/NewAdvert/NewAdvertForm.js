import React from 'react';
import { Input, Checkbox, Select } from 'antd';
import useForm from './../../../src/hooks/useForm';
import { getTags } from './../../api/adverts';
import InputFile from './../shared/InputFile';
import Button from './../shared/Button';

const NewAdvertForm = ({ onSubmit }) => {
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Tags
  const [tags, setTags] = React.useState(null);
  const { Option } = Select;

  React.useEffect(() => {
    const execute = async () => {
      try {
        setTags(await getTags());
      } catch (error) {
        console.log('Error loading tags: ', error);
      }
    };
    execute();
  }, []);

  const [advert, handleChange, handleSubmit] = useForm({
    name: '',
    sale: false,
    price: 0,
    tags: [],
    photo: null,
  });

  const afterPreventDefault = ev => {
    onSubmit(advert);
  };

  const validation = () => {
    const { name, price, tags } = advert;
    const aux = (name !== null || '') && price > 0 && tags.length > 0;
    return aux;
  };

  return (
    <form onSubmit={handleSubmit(afterPreventDefault)}>
      <Input
        name='name'
        placeholder='Ad name'
        value={advert.name}
        onChange={handleChange}
        ref={inputRef}
      />
      <Input
        type='number'
        placeholder='Price'
        name='price'
        value={advert.price}
        onChange={handleChange}
      />
      <Select
        mode='multiple'
        name='tags'
        value={advert.tags}
        allowClear
        style={{ width: '100%' }}
        placeholder='Please select one at least'
        onChange={handleChange}
      >
        {tags?.map(tag => (
          <Option key={tag}>{tag}</Option>
        ))}
      </Select>
      <InputFile name='photo' onChange={handleChange} />
      <Checkbox name='sale' onChange={handleChange}>
        Sale?
      </Checkbox>
      <Button primary disabled={!validation()}>
        Add
      </Button>
    </form>
  );
};

// TODO: NewAdvertForm.propTypes = {}

export default NewAdvertForm;
