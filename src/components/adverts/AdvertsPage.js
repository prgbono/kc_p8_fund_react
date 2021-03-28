import React from 'react';
import { getAdverts } from "../../api/adverts";

const AdvertsPage = () => {
  const [adverts, setAdverts] = React.useState([]);
  
  React.useEffect(() => {
    getAdverts()
    .then(setAdverts)
    .catch(error => console.log('Error: ', error));
  }, []);
  const items = adverts.map(advert => <li key={advert.id}>{advert.content}</li>);

  return (
    <div className="tweetsPage">
      <ul>{items}</ul>
    </div>
  );
};

export default AdvertsPage;