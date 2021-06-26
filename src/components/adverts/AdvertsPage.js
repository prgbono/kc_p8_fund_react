import React, {useState} from 'react';
import { getAdverts } from '../../api/adverts';
import AdvertsList from './AdvertsList';
import EmptyAdsList from './EmptyAdsList';
import { NodepopLayout } from './../layout/NodepopLayout';
import { defaultFilters, filterAdverts } from './filters';
import FiltersForm from './FiltersForm';

const AdvertsPage = props => {
  const [adverts, setAdverts] = React.useState([]);

  const [filters, setFilters] = useState(defaultFilters)

  React.useEffect(() => {
    getAdverts()
      .then(setAdverts)
      .catch(error => {
        console.log('Error getting adverts: ', error);
        // TODO: Handle the 'Unauthorised error. Now when says there is no Ads when happens
      });
  }, []);

  const filteredAdverts = filterAdverts(adverts, filters);

  console.log('filteredAdverts: ', filteredAdverts);

  return (
    <NodepopLayout {...props}>
      {adverts.length > 0 && (
        <FiltersForm
          initialFilters={filters}
          defaultFilters={defaultFilters}
          prices={adverts.map(({ price }) => price)}
          onFilter={setFilters}
        />
      )}
      {filteredAdverts.length ? (
        <AdvertsList adverts={filteredAdverts} {...props} />
      ) : (
        <EmptyAdsList />
      )}
    </NodepopLayout>
  );
};

export default AdvertsPage;
