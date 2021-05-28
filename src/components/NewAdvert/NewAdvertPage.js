import React, { useState } from 'react';
import { NodepopLayout } from './../layout/NodepopLayout';
import NewAdvertForm from './NewAdvertForm';
import { createAdvert } from './../../api/adverts';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';

const NewAdvertPage = () => {
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = async newAdvert => {
    const newAdvertFormData = new FormData();
    Object.keys(newAdvert).forEach(key => {
      newAdvert[key] !== null && newAdvertFormData.append(key, newAdvert[key]);
    });
    try {
      const advert = await createAdvert(newAdvertFormData);
      history.push(`/adverts/${advert.id}`);
    } catch (error) {
      setError(true);
      console.log('Error adding advert, error: ', error.message);
    }
  };

  if (error && error.status === 401) {
    return <Redirect to='/login' />;
  }

  return (
    <NodepopLayout>
      <NewAdvertForm onSubmit={handleSubmit}></NewAdvertForm>
    </NodepopLayout>
  );
};

//TODO: NewAdvertPage.propTypes
export default NewAdvertPage;
