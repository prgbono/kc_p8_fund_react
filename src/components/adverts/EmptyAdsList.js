import React from 'react';
import { Link } from 'react-router-dom';

const EmptyAdsList = () => {
  console.log('EmptyAdsList component');
  return (
    <div>
      <p>Empty list. There are no ads yet</p>
      <Link to='/adverts/new'>
        <p>Create your first one!</p>
      </Link>
    </div>
  );
};

//TODO: EmptyAdsList.propTypes = {};

export default EmptyAdsList;
