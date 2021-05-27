import React, { useState } from 'react';
import { NodepopLayout } from './../layout/NodepopLayout';
import NewAdvertForm from './NewAdvertForm';
import { createAdvert } from './../../api/adverts';

const NewAdvertPage = () => {
  const [error, setError] = useState(null);
  const [createdAdvert, setCreatedAdvert] = useState(null);

  const handleSubmit = async newAdvert => {
    console.log('NewAdvertPAge, handleSubmit. newAdvert: ', newAdvert);
    try {
      const advert = await createAdvert(newAdvert);
      setCreatedAdvert(advert);
    } catch (error) {
      setError(true);
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
