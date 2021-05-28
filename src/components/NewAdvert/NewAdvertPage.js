import React, { useState } from 'react';
import { NodepopLayout } from './../layout/NodepopLayout';
import NewAdvertForm from './NewAdvertForm';
import { createAdvert } from './../../api/adverts';

const NewAdvertPage = () => {
  const [error, setError] = useState(null);
  const [createdAdvert, setCreatedAdvert] = useState(null);

  const handleSubmit = async newAdvert => {
    console.log('NewAdvertPAge, handleSubmit. newAdvert: ', newAdvert);
    const newAdvertFormData = new FormData();
    Object.keys(newAdvert).forEach(key => {
      newAdvert[key] !== null && newAdvertFormData.append(key, newAdvert[key]);
    });
    try {
      const advert = await createAdvert(newAdvertFormData);
      setCreatedAdvert(advert);
    } catch (error) {
      setError(true);
      console.log('Error adding advert, error: ', error.message);
    }
  };

  return (
    <NodepopLayout>
      <NewAdvertForm onSubmit={handleSubmit}></NewAdvertForm>
    </NodepopLayout>
  );
};

//TODO: NewAdvertPage.propTypes
export default NewAdvertPage;
