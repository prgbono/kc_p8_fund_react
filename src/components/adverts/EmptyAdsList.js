import React from 'react';
import { Link } from 'react-router-dom';

const EmptyAdsList = props => {
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

export default EmptyAdsList;
