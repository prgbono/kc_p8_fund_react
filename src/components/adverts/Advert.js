import React from 'react';
import { NodepopLayout } from '../layout/NodepopLayout';

const Advert = ({ match, ...props }) => {
  // console.log(`🚀  FRG 🚀 ~ Advert ~ match:`, match);
  // console.log(`🚀  FRG 🚀 ~ Advert ~ props:`, props);
  // const { match } = props;
  console.log(`🚀  FRG2 🚀 ~ Advert ~ match:`, match);

  // React.useEffect(() => {
  //   const { match } = routeProps;
  //   getTweetDetail(match.params.tweetId)
  //     .then(tweet => this.setState({ tweet }))
  //     .catch(error => this.setState({ error }));
  // });

  // useEffect(() => {
  //   const getUsuario = async () => {
  //     // pasamos el nombre del usuario a la petición
  //     const url = `https://api.github.com/users/${props.match.params.nombre}`;
  //     const { data } = await axios(url);

  //     setUsuario(data);
  //   };
  // }, []);

  return (
    <NodepopLayout>
      <p>This is the Advert component</p>
    </NodepopLayout>
  );
};

export default Advert;
